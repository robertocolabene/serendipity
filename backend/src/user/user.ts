import { Injectable, Req } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

@Injectable()
export class User {
    get(){
        return {name:'asd',email:'asd@asd.it'};
    }

    create(@Req() req: FastifyRequest){
        return req.body;
    }
}
