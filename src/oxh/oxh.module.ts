import { Module } from '@nestjs/common';
import { OxhService } from './oxh.service';
import { OxhGateway } from './oxh.gateway';

@Module({
  providers: [OxhGateway, OxhService],
})
export class OxhModule {}
