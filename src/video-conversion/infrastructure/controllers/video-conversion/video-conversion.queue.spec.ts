import { Test, TestingModule } from '@nestjs/testing';
import { VideoConversionQueueController } from './video-conversion.queue';

describe('VideoConversionController', () => {
  let controller: VideoConversionQueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoConversionQueueController],
    }).compile();

    controller = module.get<VideoConversionQueueController>(VideoConversionQueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
