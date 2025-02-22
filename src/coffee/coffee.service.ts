import { Injectable } from "@nestjs/common";
import { Coffee } from "./interfaces/coffee.interface";

@Injectable()
export class CoffeeService {
  private readonly coffees: Coffee[] = [];

  create(coffee: Coffee) {
    this.coffees.push(coffee);
  }

  findAll(): Coffee[] {
    return this.coffees;
  }
}
