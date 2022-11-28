import { MyGateway } from './gateway';
import { Module } from '@nestjs/common';

@Module({
  providers: [MyGateway],
})
export class GatewayModule {}