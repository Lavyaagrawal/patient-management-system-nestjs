import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Patient } from './patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient)
    private patientRepo: Repository<Patient>,
  ) {}

  findAll() {
    return this.patientRepo.find();
  }

  async findOne(id: number) {
    const patient = await this.patientRepo.findOneBy({ id });
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }
    return patient;
  }

  create(data: any) {
    return this.patientRepo.save(data);
  }

  update(id: number, data: any) {
    return this.patientRepo.update(id, data);
  }

  remove(id: number) {
    return this.patientRepo.delete(id);
  }
}
