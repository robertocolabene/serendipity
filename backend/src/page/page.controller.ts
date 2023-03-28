import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { PageService } from './page.service';
import { FastifyRequest } from 'fastify';

@Controller()
export class PageController {
  constructor(private readonly PageService: PageService) {}

  @Get()
  home(): object {
    return this.PageService.home();
  }

  @Get('test')
  test(@Req() req: FastifyRequest) {
    return req.query;
  }

  @Get('pages/:id')
  pages(@Req() req: FastifyRequest) {
    return req.params;
  }
}
