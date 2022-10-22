import { Ctx, InjectBot, Message, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { UsersService } from './service/users.service';
import { ConvertToCreateUserDTOPipe } from './interceptors/pipes';
import { mainButtons } from './buttons';
import { CreateUserDto } from './dto/create-user.dto';

@Update()
export class UsersBot {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>, private readonly usersService: UsersService) {}

  @Start()
  public async startCommand(
    @Ctx() ctx: Context,
    @Message('from', ConvertToCreateUserDTOPipe) tgUser: CreateUserDto,
  ): Promise<void> {
    const user = await this.usersService.create(tgUser);
    await ctx.reply(
      `Hi, ${this.getFullName(user)}. Here your own tracking system. \nYou can create task or watch your tasks`,
      mainButtons(),
    );
  }

  private getFullName(user: CreateUserDto): string {
    return `${user.firstName} ${user.lastName || ''}`;
  }
}
