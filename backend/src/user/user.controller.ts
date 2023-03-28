import { Controller, Get, Post, Req } from '@nestjs/common';
import { User } from './user';
import { FastifyRequest } from 'fastify';

@Controller('user')
export class UserController {
    constructor(private readonly User: User){}

    @Get()
    getUser() {
        return this.User.get();
    }

    @Post()
    createUser(@Req() req: FastifyRequest) {
        return this.User.create(req);
    }
}
