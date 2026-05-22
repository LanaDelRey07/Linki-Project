import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './patient/patient.module';
import { ClinicalModule } from './clinical/clinical.module';
import { CatalogModule } from './catalog/catalog.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AccessModule } from './access/access.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    PatientModule,
    ClinicalModule,
    CatalogModule,
    AppointmentModule,
    AccessModule,
  ],
})
export class AppModule {}