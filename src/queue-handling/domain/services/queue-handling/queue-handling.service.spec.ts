import { Test, TestingModule } from '@nestjs/testing';
import { QueueHandlingService } from './queue-handling.service';

describe('QueueHandlingService', () => {
  let service: QueueHandlingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueueHandlingService],
    }).compile();

    service = module.get<QueueHandlingService>(QueueHandlingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
