import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [TypeOrmModule.forRoot(), HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
