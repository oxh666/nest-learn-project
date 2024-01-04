import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { FirstService } from "./first.service";
import { First } from "./interfaces/first.interface";
import { CreateFirstDto } from "./dto/create-first.dto";

@Controller("first")
export class FirstController {
  constructor(private readonly firstService: FirstService) {}

  /**
   * @description get
   * @param query
   */
  @Get()
  say(@Query() query: Record<string, any>) {
    console.log(query);
    return this.firstService.say();
  }

  @Get("/sayhellow")
  sayHello() {
    return this.firstService.say1();
  }

  /**
   *  @description get by id  /id
   * @param id
   */
  @Get(":id")
  say1(@Param("id") id: string) {
    return `AAAAA&${id}`;
  }

  /**
   * @description post
   * @param value
   */
  @Post("/post")
  create1(@Body() value: Record<string, any>) {
    return value;
  }

  @Delete(":id")
  saygoodbye(@Param("id") id: string) {
    return `goodbye ${id}`;
  }

  @Put()
  say2(@Body() value: Record<string, any>) {
    return value;
  }

  @Get("/abc")
  async findAll(): Promise<First[]> {
    return this.firstService.findAll();
  }

  @Post("/abc")
  async create(@Body() createFirstDto: CreateFirstDto) {
    console.log(createFirstDto);
    this.firstService.create(createFirstDto);
  }
}
