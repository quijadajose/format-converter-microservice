import { Test, TestingModule } from '@nestjs/testing';
import { VideoConversionService } from './video-conversion.service';

describe('VideoConversionService', () => {
  let service: VideoConversionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoConversionService],
    }).compile();

    service = module.get<VideoConversionService>(VideoConversionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
