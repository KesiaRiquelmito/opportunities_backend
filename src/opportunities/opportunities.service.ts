import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Opportunities } from './models/opportunities.model';
import { Opportunity } from './entities/opportunity.entity';
import { Op } from 'sequelize';
import { OpportunityQueryDto } from './dto/opportunity-query.dto';

@Injectable()
export class OpportunitiesService {
  private readonly logger = new Logger(OpportunitiesService.name);

  constructor(
    @InjectModel(Opportunities)
    private opportunitiesModel: typeof Opportunities,
  ) {}

  async findAllOpportunities(
    query: OpportunityQueryDto,
  ): Promise<Opportunities[]> {
    try {
      const where: any = {};

      if (query.type !== undefined && query.type !== 'tender' && query.type !== 'agile') {
        const message = 'Incorrect query type; must be either "tender" or "agile"';
        this.logger.error(message);
        throw new BadRequestException(message);
      }

      if (query.type) {
        where.type = query.type;
      }

      if (query.publish_date_start && query.publish_date_end) {
        const startDate = new Date(query.publish_date_start);
        const endDate = new Date(query.publish_date_end);

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
          const message = 'Invalid publish date format; must be in YYYY-MM-DD';
          this.logger.error(message);
          throw new BadRequestException(message);
        }

        if (startDate > endDate) {
          const message = 'Start date must be before or equal to end date';
          this.logger.error(message);
          throw new BadRequestException(message);
        }

        where.publish_date = {
          [Op.between]: [startDate, endDate],
        };
      }
      return await this.opportunitiesModel.findAll({ where });
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      this.logger.error('Failed to find followed opportunities', error);
      throw new InternalServerErrorException(
        'Could not retrieve followed opportunities',
      );
    }
  }

  async findFollowed(query: OpportunityQueryDto): Promise<Opportunities[]> {
    try {
      const where: any = {};

      if (query.type !== undefined && query.type !== 'tender' && query.type !== 'agile') {
        const message = 'Incorrect query type; must be either "tender" or "agile"';
        this.logger.error(message);
        throw new BadRequestException(message);
      }

      if (query.type) {
        where.type = query.type;
      }

      if (query.publish_date_start && query.publish_date_end) {
        const startDate = new Date(query.publish_date_start);
        const endDate = new Date(query.publish_date_end);

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
          const message = 'Invalid publish date format; must be in YYYY-MM-DD';
          this.logger.error(message);
          throw new BadRequestException(message);
        }

        if (startDate > endDate) {
          const message = 'Start date must be before or equal to end date';
          this.logger.error(message);
          throw new BadRequestException(message);
        }

        where.publish_date = {
          [Op.between]: [startDate, endDate],
        };
      }

      where.is_followed = true;

      return await this.opportunitiesModel.findAll({ where });
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      this.logger.error('Failed to find followed opportunities', error);
      throw new InternalServerErrorException(
        'Could not retrieve followed opportunities',
      );
    }
  }


  async toggleFollowStatus(id: number): Promise<Opportunity> {
    try {
      const opportunity = await this.opportunitiesModel.findByPk(id);
      if (!opportunity) throw new NotFoundException('Opportunity not found');
      opportunity.is_followed = !opportunity.is_followed;
      await opportunity.save();
      return opportunity;
    } catch (error) {
      this.logger.error(`Failed to toggle follow status for ID ${id}`, error);
      throw new InternalServerErrorException('Failed to update follow status');
    }
  }
}
