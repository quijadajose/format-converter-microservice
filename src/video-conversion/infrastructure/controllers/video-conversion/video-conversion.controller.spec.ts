import { Test, TestingModule } from '@nestjs/testing';
import { VideoConversionController } from './video-conversion.controller';

describe('VideoConversionController', () => {
  let controller: VideoConversionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoConversionController],
    }).compile();

    controller = module.get<VideoConversionController>(VideoConversionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
