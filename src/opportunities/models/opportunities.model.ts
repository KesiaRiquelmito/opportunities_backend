import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'Opportunities',
  timestamps: false,
})
export class Opportunities extends Model<Opportunities> {
  //Use declare fields avoid creating the class fields that conflict with Sequelize's mechanisms
  @Column({ type: DataType.STRING })
  declare code: string;

  @Column({ type: DataType.TEXT })
  declare title: string;

  @Column({ type: DataType.STRING })
  declare type: string;

  @Column({ type: DataType.BOOLEAN })
  declare is_followed: boolean;

  @Column({ type: DataType.DATE })
  declare publish_date: Date;

  @Column({ type: DataType.DATE })
  declare close_date: Date;
}
