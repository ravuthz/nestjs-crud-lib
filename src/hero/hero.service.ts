import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { RepositoryService } from '@nestjsx/crud/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Hero } from './hero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HeroService extends TypeOrmCrudService<Hero> {
  constructor(@InjectRepository(Hero) repo: Repository<Hero>) {
    super(repo);
  }

  getName() {
    return 'HeroService';
  }
}