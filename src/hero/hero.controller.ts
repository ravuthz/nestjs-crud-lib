import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Hero } from './hero.entity';
import { HeroService } from './hero.service';

@Crud(Hero)
@Controller('heroes')
export class HeroController implements CrudController<HeroService, Hero> {
  constructor(public service: HeroService) { }
}