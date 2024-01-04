import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FirstController } from "./first/first.controller";
import { FirstService } from "./first/first.service";

@Module({
  imports: [],
  controllers: [ AppController, FirstController ],
  providers: [ AppService, FirstService ]
})
export class AppModule {
}
