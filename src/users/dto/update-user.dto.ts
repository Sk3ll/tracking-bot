import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Roles } from '../../utils';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: number;

  telegramId: number;

  firstName: string;

  lastName: string;

  role: Roles;
}
