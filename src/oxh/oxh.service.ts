import { Injectable } from '@nestjs/common';
import { CreateOxhDto } from './dto/create-oxh.dto';
import { UpdateOxhDto } from './dto/update-oxh.dto';

@Injectable()
export class OxhService {
  create(createOxhDto: CreateOxhDto) {
    return 'This action adds a new oxh';
  }

  findAll() {
    return `This action returns all oxh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oxh`;
  }

  update(id: number, updateOxhDto: UpdateOxhDto) {
    return `This action updates a #${id} oxh`;
  }

  remove(id: number) {
    return `This action removes a #${id} oxh`;
  }
}
