import { Test, TestingModule } from '@nestjs/testing';
import { OxhService } from './oxh.service';

describe('OxhService', () => {
  let service: OxhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OxhService],
    }).compile();

    service = module.get<OxhService>(OxhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
