import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('users')
export class UsersController {
    @Get()
    getDefault(): string{
        return 'users default!!'
    }
    @Get('profile')
    getProfile(): string{
        return 'profile user'
    }
    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `this action return a user ${params.id}`
    } 
}
