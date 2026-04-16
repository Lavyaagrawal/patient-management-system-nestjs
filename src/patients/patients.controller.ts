import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  getAllPatients() {
    return this.patientsService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createPatient(@Body() patient: CreatePatientDto) {
    return this.patientsService.addPatient(patient);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: CreatePatientDto) {
    return this.patientsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(id);
  }
}
