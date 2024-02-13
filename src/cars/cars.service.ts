import { UpdateCarDTO } from './dto/update_car.dto';
import { CreateCarDTO } from './dto/create_car.dto';
import { Injectable } from '@nestjs/common';
import { Car, CarDocument } from './schema/car.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async createCar(CreateCarDTO: CreateCarDTO): Promise<Car> {
    const car = new this.carModel(CreateCarDTO);
    return car.save();
  }

  async findCars(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async updateCar(id: string, UpdateCarDTO: UpdateCarDTO): Promise<Car> {
    return this.carModel.findByIdAndUpdate(id, UpdateCarDTO).exec();
  }
    
  async deleteCar(id: string,): Promise<Car> {
    return this.carModel.findByIdAndDelete(id)
  }
}
