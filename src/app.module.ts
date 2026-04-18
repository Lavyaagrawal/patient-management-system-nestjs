import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.MYSQL_PUBLIC_URL,

      autoLoadEntities: true, // load from modules

      // ⭐ ADD THIS LINE (critical for production)
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    PatientsModule,
  ],
})
export class AppModule {}
