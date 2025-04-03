import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { Opportunities } from './models/opportunities.model';
import { Opportunity } from './entities/opportunity.entity';

@Injectable()
export class OpportunitiesService {
  constructor(
    @InjectModel(Opportunities)
    private opportunitiesModel: typeof Opportunities,
  ) {}

  create(createOpportunityDto: CreateOpportunityDto) {
    return 'This action adds a new opportunity';
  }

  findAll(): Promise<Opportunities[]> {
    return this.opportunitiesModel.findAll();
  }

  findFollowed(): Promise<Opportunities[]> {
    return this.opportunitiesModel.findAll({
      where: {
        is_followed : true,
      }
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
      return []
    }
  }

  remove(id: number) {
    return `This action removes a #${id} opportunity`;
  }
}
