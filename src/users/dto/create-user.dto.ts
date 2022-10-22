import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Roles } from '../../utils';

export class CreateUserDto {
  @IsNumber()
  telegramId: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEnum(Roles)
  role: Roles;
}
