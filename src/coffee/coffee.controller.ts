import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private coffeeService: CoffeeService) { }

  @Get()
  findAll(): string {
    return 'This action returns all coffee';
  }

  @Get(':id')
  find(@Param('id') id: string): string {
    return `This action returns a #${id} coffee`
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    this.coffeeService.create(createCoffeeDto);
  }
}
