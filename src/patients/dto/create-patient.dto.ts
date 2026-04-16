import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePatientDto {
  @IsString()
  name!: string;

  @Type(() => Number)
  @IsNumber()
  age!: number;
}
