import { IsOptional, IsBoolean, IsString, IsIn } from 'class-validator';

export class OpportunityQueryDto {
  @IsOptional()
  @IsIn(['tender', 'agile'])
  type?: string;

  @IsOptional()
  @IsString()
  publish_date_start?: string;

  @IsOptional()
  @IsString()
  publish_date_end?: string;

  @IsOptional()
  @IsBoolean()
  is_followed?: boolean;
}