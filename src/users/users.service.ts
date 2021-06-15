import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/users.schema';
import { Model } from 'mongoose';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private readonly model: Model<UsersDocument>,
      ) {}
    
      async findAll(): Promise<Users[]> {
        return await this.model.find().exec();
      }
    
      async findOne(id: string): Promise<Users> {
        return await this.model.findById(id).exec();
      }
    
      async create(createTodoDto: CreateUsersDto): Promise<Users> {
        return await new this.model({
          ...createTodoDto,
          createdAt: new Date(),
        }).save();
      }
    
      async update(id: string, updateTodoDto: UpdateUsersDto): Promise<Users> {
        return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
      }
    
      async delete(id: string): Promise<Users> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}
