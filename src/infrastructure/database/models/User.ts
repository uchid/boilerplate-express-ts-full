import {
  Table,
  Column,
  Model,
  DataType,
  IsUUID,
  PrimaryKey,
  Default,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column(DataType.UUID)
  id!: string;

  @Column(DataType.TEXT)
  name!: string;

  @Column(DataType.DATE)
  birthday!: Date;

  @Column(DataType.BOOLEAN)
  isActive!: boolean;
}
