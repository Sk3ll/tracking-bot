import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from '../service/users.service';
import { UserEntity } from '../entity/user.entity';
import { Roles } from '../../utils';

describe('UsersController', () => {
  let controller: UsersController;
  const userEntityMock: UserEntity = {
    id: Number(new Date()),
    telegramId: Number(new Date()),
    firstName: 'firstName',
    lastName: 'lastName',
    role: Roles.CLIENT,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: userEntityMock,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
