import { Controller, Get } from '@nestjs/common';
import { PageService } from './page.service';

@Controller()
export class PageController {
  constructor(private readonly appService: PageService) {}

  @Get()
  home(): object {
    return this.appService.home();
  }
}
