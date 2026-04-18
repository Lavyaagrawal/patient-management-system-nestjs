import { Injectable } from '@nestjs/common';
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

  create(data: any) {
    return this.patientRepo.save(data);
  }

  findOne(id: number) {
    return this.patientRepo.findOneBy({ id });
  }

  update(id: number, data: any) {
    return this.patientRepo.update(id, data);
  }

  remove(id: number) {
    return this.patientRepo.delete(id);
  }
}
