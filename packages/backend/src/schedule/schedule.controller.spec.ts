import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleController } from './Schedule.controller';
import { ScheduleService } from './Schedule.service';

describe('ScheduleController', () => {
  let scheduleController: ScheduleController;
  beforeEach(async () => {
    const Schedule: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleController],
      providers: [ScheduleService],
    }).compile();

    scheduleController = Schedule.get<ScheduleController>(ScheduleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(ScheduleController.getHallInfo({ ent_code: 'sdaf' })).toBe(
      //   'Hello World!',
      // );
    });
  });
});
