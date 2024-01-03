import { PartialType } from '@nestjs/mapped-types';
import { CreateOxhDto } from './create-oxh.dto';

export class UpdateOxhDto extends PartialType(CreateOxhDto) {
  id: number;
}
