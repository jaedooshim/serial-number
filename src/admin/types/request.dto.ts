import { IsNotEmpty, IsNumber } from 'class-validator';

export class SerialNumberDto {
  @IsNumber()
  @IsNotEmpty()
  serialNumber: number;
}
