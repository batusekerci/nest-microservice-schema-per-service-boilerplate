import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }
}
