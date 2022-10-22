import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnv } from './utils';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/entity/user.entity';

// Local sessions for telegram-bot
// TODO: added postgresql database instead of local
const sessions = new LocalSession({ database: 'session_db.json' });

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: Number(getEnv('DATABASE_PORT')),
      username: getEnv('MYSQL_USER'),
      password: getEnv('MYSQL_PASSWORD'),
      database: getEnv('MYSQL_DATABASE'),
      entities: [UserEntity],
      synchronize: true,
    }),
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: getEnv('BOT_TOKEN'),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
