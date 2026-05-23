"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const cie10_seed_1 = require("./seed/cie10.seed");
const medications_seed_1 = require("./seed/medications.seed");
const cities_seed_1 = require("./seed/cities.seed");
const studies_seed_1 = require("./seed/studies.seed");
const specialties_seed_1 = require("./seed/specialties.seed");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('Seeding database...');
    console.log('Clearing existing data...');
    await prisma.$transaction([
        prisma.encounterReferral.deleteMany(),
        prisma.encounterImagingOrder.deleteMany(),
        prisma.encounterLabOrder.deleteMany(),
        prisma.encounterPrescription.deleteMany(),
        prisma.encounterSystemReview.deleteMany(),
        prisma.encounterDiagnosis.deleteMany(),
        prisma.clinicalAddendum.deleteMany(),
        prisma.clinicalEncounter.deleteMany(),
        prisma.appointment.deleteMany(),
        prisma.patientDoctorAccess.deleteMany(),
        prisma.patientBackgroundVersion.deleteMany(),
        prisma.patientFamilyHistory.deleteMany(),
        prisma.patientHospitalization.deleteMany(),
        prisma.patientSurgery.deleteMany(),
        prisma.patientMedication.deleteMany(),
        prisma.patientChronicCondition.deleteMany(),
        prisma.patientAllergy.deleteMany(),
        prisma.patientBackground.deleteMany(),
        prisma.emergencyContact.deleteMany(),
        prisma.patientIdentification.deleteMany(),
        prisma.patientProfile.deleteMany(),
        prisma.userRoleAssignment.deleteMany(),
        prisma.user.deleteMany(),
        prisma.medicationsCatalog.deleteMany(),
        prisma.labStudiesCatalog.deleteMany(),
        prisma.imagingStudiesCatalog.deleteMany(),
        prisma.medicalSpecialty.deleteMany(),
        prisma.boliviaCity.deleteMany(),
        prisma.cie10Code.deleteMany(),
    ]);
    console.log('Seeding CIE-10 codes...');
    for (const code of cie10_seed_1.cie10Codes) {
        await prisma.cie10Code.upsert({
            where: { id: code.id },
            update: code,
            create: code,
        });
    }
    console.log(`  ✅ ${cie10_seed_1.cie10Codes.length} CIE-10 codes seeded`);
    console.log('Seeding medications...');
    for (const med of medications_seed_1.medications) {
        await prisma.medicationsCatalog.create({
            data: med,
        });
    }
    console.log(`  ✅ ${medications_seed_1.medications.length} medications seeded`);
    console.log('Seeding cities...');
    for (const city of cities_seed_1.cities) {
        await prisma.boliviaCity.upsert({
            where: { departamento_nombre: { departamento: city.departamento, nombre: city.nombre } },
            update: { isActive: true },
            create: city,
        });
    }
    console.log(`  ✅ ${cities_seed_1.cities.length} cities seeded`);
    console.log('Seeding lab studies catalog...');
    for (const study of studies_seed_1.labStudies) {
        await prisma.labStudiesCatalog.create({
            data: study,
        });
    }
    console.log(`  ✅ ${studies_seed_1.labStudies.length} lab studies seeded`);
    console.log('Seeding imaging studies catalog...');
    for (const study of studies_seed_1.imagingStudies) {
        await prisma.imagingStudiesCatalog.create({
            data: study,
        });
    }
    console.log(`  ✅ ${studies_seed_1.imagingStudies.length} imaging studies seeded`);
    console.log('Seeding medical specialties...');
    for (const spec of specialties_seed_1.specialties) {
        await prisma.medicalSpecialty.upsert({
            where: { name: spec.name },
            update: { description: spec.description },
            create: spec,
        });
    }
    console.log(`  ✅ ${specialties_seed_1.specialties.length} specialties seeded`);
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
//# sourceMappingURL=seed.js.map