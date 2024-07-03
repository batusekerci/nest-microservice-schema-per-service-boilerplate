import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async createUsers(user: CreateUserDto) {
    const newUser = await this.userRepo(user);
    const exists = await this.userRepo.findOneBy(user);
    if (exists) {
      throw new ConflictException('User title already exists');
    }
    try {
      await this.userRepo.save(newUser);
    } catch (error) {
      throw new InternalServerErrorException();
    }
    return newUser;
  }
  async getAllUsers() {
    return this.userRepo.find();
  }
}
