import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateCarDTO {
  @IsString()
  model: string;

  @IsNumber()
  year: number;

  @IsBoolean()
  isRacing: boolean;
}
