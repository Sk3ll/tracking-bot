import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UserEntity } from '../entity/user.entity';
import { Roles } from '../../utils';

describe('UsersService', () => {
  let service: UsersService;
  const userEntityMock: UserEntity = {
    id: Number(new Date()),
    telegramId: Number(new Date()),
    firstName: 'firstName',
    lastName: 'lastName',
    role: Roles.CLIENT,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: userEntityMock,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
