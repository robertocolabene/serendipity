import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  home(): object {
    return {name:'test', prova:'ok'};
  }
}
