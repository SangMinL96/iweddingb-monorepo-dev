import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriseController } from './enterprise.controller';
import { EnterpriseService } from './enterprise.service';

describe('EnterpriseController', () => {
  let enterpriseController: EnterpriseController;

  beforeEach(async () => {
    const Enterprise: TestingModule = await Test.createTestingModule({
      controllers: [EnterpriseController],
      providers: [EnterpriseService],
    }).compile();

    enterpriseController =
      Enterprise.get<EnterpriseController>(EnterpriseController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(EnterpriseController.getHallInfo({ ent_code: 'sdaf' })).toBe(
      //   'Hello World!',
      // );
    });
  });
});
