import {
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
      if (query.type) {
        where.type = query.type;
      }
      if (query.publish_date_start && query.publish_date_end) {
        where.publish_date = {
          [Op.between]: [
            new Date(query.publish_date_start),
            new Date(query.publish_date_end),
          ],
        };
      }
      return await this.opportunitiesModel.findAll({ where });
    } catch (error) {
      this.logger.error(`Failed to find opportunities}`, error);
      throw new InternalServerErrorException(
        'Could not retrieve opportunities',
      );
    }
  }

  async findFollowed(query: OpportunityQueryDto): Promise<Opportunities[]> {
    try {
      const where: any = {};

      if (query.type != 'tender' && query.type != 'agile') {
        this.logger.error('Incorrect query, must be a type tender or agile');
      }

      if (query.type) {
        where.type = query.type;
      }

      if (query.publish_date_start && query.publish_date_end) {
        where.publish_date = {
          [Op.between]: [
            new Date(query.publish_date_start),
            new Date(query.publish_date_end),
          ],
        };
      }

      where.is_followed = true;
      return this.opportunitiesModel.findAll({
        where,
      });
    } catch (error) {
      this.logger.error(`Failed to find followed opportunities`, error);
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
