import { Controller, Get, Post } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll(): string {
    return 'This action returns all coffee';
  }

  @Post()
  create(): string {
    return 'This action adds a new coffee';
  }
}
