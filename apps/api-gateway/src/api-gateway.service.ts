import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ApiGatewayService {
  constructor(private prisma: PrismaService) {}
}
