import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OxhModule } from './oxh/oxh.module';

@Module({
  imports: [OxhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
