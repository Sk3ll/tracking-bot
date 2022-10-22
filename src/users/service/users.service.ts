import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity>) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({ where: { telegramId: createUserDto.telegramId } });
    if (user) return user;
    const createdUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(createdUser);
  }

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findOneById(id: number): Promise<UserEntity | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  findOneByTelegramId(telegramId: number): Promise<UserEntity | null> {
    return this.usersRepository.findOne({ where: { telegramId } });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number): Promise<any> {
    return this.usersRepository.delete(id);
  }
}
