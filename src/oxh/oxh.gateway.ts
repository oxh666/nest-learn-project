import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { OxhService } from './oxh.service';
import { CreateOxhDto } from './dto/create-oxh.dto';
import { UpdateOxhDto } from './dto/update-oxh.dto';

@WebSocketGateway()
export class OxhGateway {
  constructor(private readonly oxhService: OxhService) {}

  @SubscribeMessage('createOxh')
  create(@MessageBody() createOxhDto: CreateOxhDto) {
    return this.oxhService.create(createOxhDto);
  }

  @SubscribeMessage('findAllOxh')
  findAll() {
    return this.oxhService.findAll();
  }

  @SubscribeMessage('findOneOxh')
  findOne(@MessageBody() id: number) {
    return this.oxhService.findOne(id);
  }

  @SubscribeMessage('updateOxh')
  update(@MessageBody() updateOxhDto: UpdateOxhDto) {
    return this.oxhService.update(updateOxhDto.id, updateOxhDto);
  }

  @SubscribeMessage('removeOxh')
  remove(@MessageBody() id: number) {
    return this.oxhService.remove(id);
  }
}
