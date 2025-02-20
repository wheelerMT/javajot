import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll(): string {
    return 'This action returns all coffee';
  }

  @Get(':id')
  find(@Param('id') id: string): string {
    return `This action returns a #${id} coffee`
  }

  @Post()
  create(): string {
    return 'This action adds a new coffee';
  }
}
