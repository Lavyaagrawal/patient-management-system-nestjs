import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientsService {
  private patients: any[] = [];

  getAll() {
    return this.patients;
  }

  addPatient(patient: CreatePatientDto) {
    const newPatient = {
      id: Date.now().toString(),
      ...patient,
    };

    this.patients.push(newPatient);
    return newPatient;
  }

  update(id: string, data: CreatePatientDto) {
    const patient = this.patients.find((p) => p.id === id);

    if (!patient) {
      throw new NotFoundException('Patient not found');
    }

    Object.assign(patient, data);
    return patient;
  }

  remove(id: string) {
    const index = this.patients.findIndex((p) => p.id === id);

    if (index === -1) {
      throw new NotFoundException('Patient not found');
    }

    const deleted = this.patients.splice(index, 1);

    return {
      message: 'Patient deleted successfully',
      data: deleted[0],
    };
  }
}
