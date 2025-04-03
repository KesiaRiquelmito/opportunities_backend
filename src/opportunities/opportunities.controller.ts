import { Controller, Get, Patch, Param, Query } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';
import { Opportunity } from './entities/opportunity.entity';
import { Opportunities } from './models/opportunities.model';
import { OpportunityQueryDto } from './dto/opportunity-query.dto';

@Controller('opportunities')
export class OpportunitiesController {
  constructor(private readonly opportunitiesService: OpportunitiesService) {}

  @Get()
  findAllOpportunities(@Query() query:OpportunityQueryDto): Promise<Opportunities[]> {
    return this.opportunitiesService.findAllOpportunities(query);
  }

  @Get('followed')
  findFollowed(@Query() query:OpportunityQueryDto): Promise<Opportunities[]> {
    return this.opportunitiesService.findFollowed(query);
  }

  @Patch(':id/toggle-follow')
  async toggleFollow(@Param('id') id: number):Promise<Opportunity> {
    return this.opportunitiesService.toggleFollowStatus(+id);
  }

}
