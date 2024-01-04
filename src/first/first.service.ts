import { Get, Injectable } from "@nestjs/common";
import { First } from "./interfaces/first.interface";

@Injectable()
export class FirstService {
  private readonly first: First[] = [];

  @Get()
  say(): Object {
    return {
      name: "aaaaaaaaa",
    };
  }

  say1(): Array<Number> {
    return [1, 2, 3, 4, 5];
  }

  findAll(): First[] {
    return this.first;
  }

  create(first: First) {
    this.first.push(first);
  }
}
