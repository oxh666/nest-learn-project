import { First } from "../interfaces/first.interface";

export interface CreateFirstDto extends First {
  name: string;
  age: number;
  breed: string;
}
