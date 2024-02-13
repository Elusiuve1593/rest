import { UpdateCarDTO } from './dto/update_car.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCarDTO } from './dto/create_car.dto';
import { CarService } from './cars.service';
import { Car } from './schema/car.schema';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarService: CarService) {}

  @Post()
  createCar(
    @Body()
    CreateCarDTO: CreateCarDTO,
  ): Promise<CreateCarDTO> {
    return this.CarService.createCar(CreateCarDTO);
  }

  @Get()
  getAll(): Promise<Car[]> {
    return this.CarService.findCars();
  }

  @Put(':id')
  updateCar(
    @Param('id') id: string,
    @Body()
    UpdateCarDTO: UpdateCarDTO,
  ): Promise<Car> {
    return this.CarService.updateCar(id, UpdateCarDTO);
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string): Promise<Car> {
    return this.CarService.deleteCar(id);
  }
}
