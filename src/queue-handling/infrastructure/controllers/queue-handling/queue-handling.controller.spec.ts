import { Test, TestingModule } from '@nestjs/testing';
import { QueueHandlingController } from './queue-handling.controller';

describe('QueueHandlingController', () => {
  let controller: QueueHandlingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueueHandlingController],
    }).compile();

    controller = module.get<QueueHandlingController>(QueueHandlingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
