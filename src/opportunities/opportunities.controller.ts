import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';
import { Opportunity } from './entities/opportunity.entity';
import { Opportunities } from './models/opportunities.model';

@Controller('opportunities')
export class OpportunitiesController {
  constructor(private readonly opportunitiesService: OpportunitiesService) {}

  @Get()
  findAllOpportunities(@Query() query:any): Promise<Opportunities[]> {
    return this.opportunitiesService.findAllOpportunities(query);
  }

  @Get('followed')
  findFollowed(@Query() query:any): Promise<Opportunities[]> {
    return this.opportunitiesService.findFollowed(query);
  }

  @Patch(':id/toggle-follow')
  async toggleFollow(@Param('id') id: number):Promise<Opportunity> {
    return this.opportunitiesService.toggleFollowStatus(+id);
  }

}
