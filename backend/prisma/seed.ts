import { PrismaClient } from '@prisma/client';
import { cie10Codes } from './seed/cie10.seed';
import { medications } from './seed/medications.seed';
import { cities } from './seed/cities.seed';
import { labStudies, imagingStudies } from './seed/studies.seed';
import { specialties } from './seed/specialties.seed';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  console.log('Seeding CIE-10 codes...');
  for (const code of cie10Codes) {
    await prisma.cie10Code.upsert({
      where: { id: code.id },
      update: code,
      create: code,
    });
  }
  console.log(`  ✅ ${cie10Codes.length} CIE-10 codes seeded`);

  console.log('Seeding medications...');
  for (const med of medications) {
    await prisma.medicationsCatalog.create({
      data: med,
    });
  }
  console.log(`  ✅ ${medications.length} medications seeded`);

  console.log('Seeding cities...');
  for (const city of cities) {
    await prisma.boliviaCity.upsert({
      where: { departamento_nombre: { departamento: city.departamento as any, nombre: city.nombre } },
      update: { isActive: true },
      create: city as any,
    });
  }
  console.log(`  ✅ ${cities.length} cities seeded`);

  console.log('Seeding lab studies catalog...');
  for (const study of labStudies) {
    await prisma.labStudiesCatalog.create({
      data: study,
    });
  }
  console.log(`  ✅ ${labStudies.length} lab studies seeded`);

  console.log('Seeding imaging studies catalog...');
  for (const study of imagingStudies) {
    await prisma.imagingStudiesCatalog.create({
      data: study,
    });
  }
  console.log(`  ✅ ${imagingStudies.length} imaging studies seeded`);

  console.log('Seeding medical specialties...');
  for (const spec of specialties) {
    await prisma.medicalSpecialty.upsert({
      where: { name: spec.name },
      update: { description: spec.description },
      create: spec,
    });
  }
  console.log(`  ✅ ${specialties.length} specialties seeded`);

  console.log('🎉 Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });