/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../auth/interfaces/auth.interface';
import { Model } from 'mongoose';


@Injectable()
export class UserService {

  constructor(
    @InjectModel('User') private UserModel: Model<User>,
    ) {}

  async findOne(user: User){
    try {
      const data: User = await this.UserModel.findOne({
        username: user.username
    })
    } catch (error) {
      throw error;
    }
  }
}

