import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, catchError } from 'rxjs';

@Injectable()
export class PageService {
  constructor(private readonly httpService: HttpService){}

  home(): object {
    return { name: 'testt', prova: 'ok2' };
  }

  async test() {
    const { data } = await firstValueFrom(
      this.httpService.get('http://127.0.0.1:8080/test').pipe(
        catchError((error) => {
          console.log(error);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
