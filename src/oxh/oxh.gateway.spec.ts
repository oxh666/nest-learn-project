import { Test, TestingModule } from '@nestjs/testing';
import { OxhGateway } from './oxh.gateway';
import { OxhService } from './oxh.service';

describe('OxhGateway', () => {
  let gateway: OxhGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OxhGateway, OxhService],
    }).compile();

    gateway = module.get<OxhGateway>(OxhGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
