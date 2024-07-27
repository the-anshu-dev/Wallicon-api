import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {


  constructor(
    @InjectModel(Users.name) private model: Model<Users>,
  ) {}

   

  async register(createUserDto: CreateUserDto) {
    const newEmail = createUserDto.email.toLowerCase();
    const existingEmail = await this.model
      .findOne({ email: newEmail })
      .lean(true);
    if (existingEmail) {
      throw new BadRequestException('Email already exists');
    }



    const newUser = await this.model.create({
      ...createUserDto,
    });

   
    return {
      ...newUser.toObject(),
      message : 'New User created Successfully',
    };
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.model
      .findOne({ email: loginUserDto.email })
      .lean(true);

    if (!user) {
      throw new NotFoundException('User not found');
    }
 

    return {
      ...user,
      message:'Login Successfully'
    };
  }


 

  async findAll() {
    return  await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.model.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string) {
    const user =  await this.model.findByIdAndDelete(id);
    return{
      name:user.name,
      message:'User deleted Successfully'
    }
  }
}
