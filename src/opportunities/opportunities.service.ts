import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';
import { Opportunities } from './models/opportunities.model';

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

  findOne(id: number) {
    return `This action returns a #${id} opportunity`;
  }

  update(id: number, updateOpportunityDto: UpdateOpportunityDto) {
    return `This action updates a #${id} opportunity`;
  }

  remove(id: number) {
    return `This action removes a #${id} opportunity`;
  }
}
