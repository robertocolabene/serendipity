import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  home(): object {
    return { name: 'testt', prova: 'ok' };
  }
}
