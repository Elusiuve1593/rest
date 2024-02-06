import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { CreateUserDTO } from './dto/create_user.dto';
import { UpdateUserDTO } from './dto/update_user.dto';
import { User } from './schema/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  findAll() {
    return this.UsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.UsersService.findOne(id);
  }

  @Post()
  createUser(
    @Body(ValidationPipe)
    createUserDTO: CreateUserDTO,
  ) {
    return this.UsersService.createUser(createUserDTO);
  }

  @Patch(':id')
  updateDataUser(
    @Param('id') id: string,
    @Body(ValidationPipe)
    updateUserDTO: UpdateUserDTO,
  ) {
    return this.UsersService.updateUser(id, updateUserDTO);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<User> {
    return this.UsersService.deleteUser(id);
  }
}
