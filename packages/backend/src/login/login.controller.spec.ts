import { Test, TestingModule } from '@nestjs/testing';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

describe('LoginController', () => {
  let loginController: LoginController;

  beforeEach(async () => {
    const Login: TestingModule = await Test.createTestingModule({
      controllers: [LoginController],
      providers: [LoginService],
    }).compile();

    loginController = Login.get<LoginController>(LoginController);
  });

  describe('root', () => {
    const user = {
      id: 'test1',
      name: 'test1',
      email: 'test1@ifamily.co.kr',
      with_id: 'iwd435990',
      hp: '010-0000-0000',
    };
    it('should return "Hello World!"', () => {
      expect(loginController.getUser(user)).toBe('Hello World!');
    });
  });
});
