import { User as TelegramUser } from 'telegraf/typings/core/types/typegram';
import { Injectable, PipeTransform } from '@nestjs/common';
import { Roles } from '../../utils';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class ConvertToCreateUserDTOPipe implements PipeTransform<TelegramUser, CreateUserDto> {
  transform(user: TelegramUser): CreateUserDto {
    return {
      telegramId: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      role: Roles.CLIENT,
    };
  }
}
