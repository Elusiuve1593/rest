import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create_user.dto';
import { UpdateUserDTO } from './dto/update_user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const addUser = new this.userModel(createUserDTO);
    return addUser.save();
  }

  async updateUser(id: string, updateUserDTO: UpdateUserDTO): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDTO).exec();
  }

  async deleteUser(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }
}
