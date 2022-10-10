import { Test, TestingModule } from '@nestjs/testing';
import { SubstringController } from './substring.controller';
import { SubstringService } from './substring.service';

describe('SubstringController', () => {
  let controller: SubstringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubstringController],
      providers: [SubstringService],
    }).compile();

    controller = module.get<SubstringController>(SubstringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
