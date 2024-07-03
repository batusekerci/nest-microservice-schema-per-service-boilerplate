import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @EventPattern('user_created')
  createUsers(user: CreateUserDto) {
    return this.usersService.createUsers(user);
  }
  @MessagePattern({ cmd: 'get-all-users' })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
