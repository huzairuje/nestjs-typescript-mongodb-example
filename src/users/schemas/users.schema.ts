import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  public id?: number;

  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop()
  age?: Number;

  @Prop()
  completedAt?: Date;

  @Prop()
  @Exclude()
  createdAt: Date;

  @Prop()
  @Exclude()
  deletedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(Users);