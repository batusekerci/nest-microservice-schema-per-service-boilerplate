import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { PrismaModule } from 'prisma/prisma.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    PrismaModule,
    ClientsModule.register([
      // {
      //   name: 'SERVICE_A',
      //   transport: Transport.TCP,
      //   options: {
      //     host: 'localhost',
      //     port: 3001,
      //   },
      // },
      // {
      //   name: 'SERVICE_B',
      //   transport: Transport.TCP,
      //   options: {
      //     host: 'localhost',
      //     port: 3002,
      //   },
      // },
      {
        name: 'USERS_SERVICE',
        transport: Transport.RMQ,
        options: { urls: ['amqp://rabbitmq:5672'], queue: 'users_queue' },
      },
      {
        name: 'DEVICES_SERVICE',
        transport: Transport.RMQ,
        options: { urls: ['amqp://rabbitmq:5672'], queue: 'devices_queue' },
      },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
