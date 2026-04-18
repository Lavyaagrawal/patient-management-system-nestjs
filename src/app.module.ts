import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patients/patient.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Lavya123@', // put your MySQL password
      database: 'hospital',
      entities: [Patient],
      synchronize: true,
    }),
    PatientsModule,
  ],
})
export class AppModule {}
