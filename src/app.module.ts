import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.MYSQL_PUBLIC_URL,
      autoLoadEntities: true, // ⭐ THIS LINE FIXES YOUR ERROR
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    PatientsModule,
  ],
})
export class AppModule {}
