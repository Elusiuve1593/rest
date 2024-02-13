import { Module, ValidationPipe } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schema/car.schema';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [CarsController],
  providers: [
    CarService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class CarsModule {}
