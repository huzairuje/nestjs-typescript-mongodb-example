import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {Body,Delete,Get,Param,Post,Put,} from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService){}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post('')
  async create(@Body() createUsersDto: CreateUsersDto) {
    console.log({ createUsersDto });
    return await this.service.create(createUsersDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return await this.service.update(id, updateUsersDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }

}
