import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
export class Opportunities extends Model {
  @Column
  code: string;

  @Column
  title: string;

  @Column
  type: string;

  @Column
  is_followed: boolean;

  @Column
  publish_date: Date;

  @Column
  close_date: Date;
}
