import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Opportunities } from './models/opportunities.model';
import { Opportunity } from './entities/opportunity.entity';
import { Op } from 'sequelize';

@Injectable()
export class OpportunitiesService {
  constructor(
    @InjectModel(Opportunities)
    private opportunitiesModel: typeof Opportunities,
  ) {}

  findAllOpportunities(query: any): Promise<Opportunities[]> {
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

    return this.opportunitiesModel.findAll({ where });
  }

  findFollowed(query: any): Promise<Opportunities[]> {
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
    return this.opportunitiesModel.findAll({
      where: {
        is_followed: true,
      },
    });
  }

  async toggleFollowStatus(id: number): Promise<Opportunity> {
    const opportunity = await this.opportunitiesModel.findByPk(id);
    try {
      if (!opportunity) throw new NotFoundException('Opportunity not found');
      opportunity.is_followed = !opportunity.is_followed;
      await opportunity.save();
      return opportunity;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
