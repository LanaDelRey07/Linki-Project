const { PrismaClient, Department } = require('@prisma/client');

const cie10Codes = [
  { id: 'A09', code: 'A09', descriptionEs: 'Diarrea y gastroenteritis presuntas infecciosas', category: 'Infecciosas' },
  { id: 'B349', code: 'B349', descriptionEs: 'Infección viral no especificada', category: 'Infecciosas' },
  { id: 'B829', code: 'B82.9', descriptionEs: 'Helmintiasis intestinal no especificada', category: 'Infecciosas' },
  { id: 'C509', code: 'C50.9', descriptionEs: 'Neoplasia maligna de mama, parte no especificada', category: 'Neoplasias' },
  { id: 'C189', code: 'C18.9', descriptionEs: 'Neoplasia maligna del colon, parte no especificada', category: 'Neoplasias' },
  { id: 'D509', code: 'D50.9', descriptionEs: 'Anemia ferropénica no especificada', category: 'Sangre' },
  { id: 'E10', code: 'E10', descriptionEs: 'Diabetes mellitus tipo 1', category: 'Endocrinas' },
  { id: 'E11', code: 'E11', descriptionEs: 'Diabetes mellitus tipo 2', category: 'Endocrinas' },
  { id: 'E119', code: 'E11.9', descriptionEs: 'Diabetes mellitus tipo 2 sin complicaciones', category: 'Endocrinas' },
  { id: 'E039', code: 'E03.9', descriptionEs: 'Hipotiroidismo no especificado', category: 'Endocrinas' },
  { id: 'E669', code: 'E66.9', descriptionEs: 'Obesidad no especificada', category: 'Endocrinas' },
  { id: 'E785', code: 'E78.5', descriptionEs: 'Hiperlipidemia no especificada', category: 'Endocrinas' },
  { id: 'F32', code: 'F32', descriptionEs: 'Episodio depresivo', category: 'Mentales' },
  { id: 'F329', code: 'F32.9', descriptionEs: 'Episodio depresivo no especificado', category: 'Mentales' },
  { id: 'F41', code: 'F41', descriptionEs: 'Otros trastornos de ansiedad', category: 'Mentales' },
  { id: 'F410', code: 'F41.0', descriptionEs: 'Trastorno de pánico', category: 'Mentales' },
  { id: 'G409', code: 'G40.9', descriptionEs: 'Epilepsia no especificada', category: 'Neurológicas' },
  { id: 'G439', code: 'G43.9', descriptionEs: 'Migraña no especificada', category: 'Neurológicas' },
  { id: 'I10', code: 'I10', descriptionEs: 'Hipertensión esencial (primaria)', category: 'Cardiovasculares' },
  { id: 'I119', code: 'I11.9', descriptionEs: 'Enfermedad cardíaca hipertensiva sin insuficiencia cardíaca', category: 'Cardiovasculares' },
  { id: 'I2510', code: 'I25.10', descriptionEs: 'Enfermedad arteriosclerótica del corazón sin angina', category: 'Cardiovasculares' },
  { id: 'I509', code: 'I50.9', descriptionEs: 'Insuficiencia cardíaca no especificada', category: 'Cardiovasculares' },
  { id: 'J00', code: 'J00', descriptionEs: 'Nasofaringitis aguda (resfriado común)', category: 'Respiratorias' },
  { id: 'J069', code: 'J06.9', descriptionEs: 'Infección aguda de vías respiratorias superiores, no especificada', category: 'Respiratorias' },
  { id: 'J189', code: 'J18.9', descriptionEs: 'Neumonía no especificada', category: 'Respiratorias' },
  { id: 'J209', code: 'J20.9', descriptionEs: 'Bronquitis aguda no especificada', category: 'Respiratorias' },
  { id: 'J459', code: 'J45.9', descriptionEs: 'Asma no especificada', category: 'Respiratorias' },
  { id: 'K297', code: 'K29.7', descriptionEs: 'Gastritis no especificada', category: 'Digestivas' },
  { id: 'K30', code: 'K30', descriptionEs: 'Dispepsia', category: 'Digestivas' },
  { id: 'L309', code: 'L30.9', descriptionEs: 'Dermatitis no especificada', category: 'Dermatológicas' },
  { id: 'L709', code: 'L70.9', descriptionEs: 'Acné no especificado', category: 'Dermatológicas' },
  { id: 'M549', code: 'M54.9', descriptionEs: 'Dolor de espalda no especificado', category: 'Musculoesqueléticas' },
  { id: 'N390', code: 'N39.0', descriptionEs: 'Infección de vías urinarias, sitio no especificado', category: 'Genitourinarias' },
  { id: 'Z00', code: 'Z00', descriptionEs: 'Examen general y evaluación de personas sin diagnóstico', category: 'Preventivas' },
  { id: 'Z000', code: 'Z00.0', descriptionEs: 'Examen médico general', category: 'Preventivas' },
  { id: 'U071', code: 'U07.1', descriptionEs: 'COVID-19, virus identificado', category: 'Infecciosas' },
];

const medications = [
  { nombreGenerico: 'Paracetamol', nombreComercial: 'Tylenol / Panadol', presentacion: 'Tableta 500mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Ibuprofeno', nombreComercial: 'Motrin / Advil', presentacion: 'Tableta 400mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Diclofenaco', nombreComercial: 'Voltaren', presentacion: 'Tableta 50mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Losartán', nombreComercial: 'Cozaar', presentacion: 'Tableta 50mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Enalapril', nombreComercial: 'Renitec', presentacion: 'Tableta 10mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Amlodipino', nombreComercial: 'Norvasc', presentacion: 'Tableta 5mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Metformina', nombreComercial: 'Glucophage', presentacion: 'Tableta 500mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Glibenclamida', nombreComercial: 'Daonil', presentacion: 'Tableta 5mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Amoxicilina', nombreComercial: 'Amoxil', presentacion: 'Cápsula 500mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Azitromicina', nombreComercial: 'Zithromax', presentacion: 'Tableta 500mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Ciprofloxacino', nombreComercial: 'Cipro', presentacion: 'Tableta 500mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Omeprazol', nombreComercial: 'Losec', presentacion: 'Cápsula 20mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Salbutamol', nombreComercial: 'Ventolin', presentacion: 'Inhalador 100mcg', viaAdministracion: 'Inhalatoria' },
  { nombreGenerico: 'Sertralina', nombreComercial: 'Zoloft', presentacion: 'Tableta 50mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Levotiroxina', nombreComercial: 'Euthyrox', presentacion: 'Tableta 50mcg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Loratadina', nombreComercial: 'Claritin', presentacion: 'Tableta 10mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Prednisona', nombreComercial: 'Deltisona', presentacion: 'Tableta 5mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Albendazol', nombreComercial: 'Zentel', presentacion: 'Tableta 400mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Fluconazol', nombreComercial: 'Diflucan', presentacion: 'Cápsula 150mg', viaAdministracion: 'Oral' },
  { nombreGenerico: 'Insulina NPH', nombreComercial: 'Humulin N', presentacion: 'Vial 100 UI/ml', viaAdministracion: 'Subcutánea' },
];

const specialties = [
  { name: 'Medicina General', description: 'Atención primaria y medicina interna general' },
  { name: 'Medicina Interna', description: 'Diagnóstico y tratamiento de enfermedades del adulto' },
  { name: 'Pediatría', description: 'Atención médica de niños y adolescentes' },
  { name: 'Ginecología y Obstetricia', description: 'Salud reproductiva femenina y embarazo' },
  { name: 'Cardiología', description: 'Enfermedades del corazón y sistema cardiovascular' },
  { name: 'Dermatología', description: 'Enfermedades de la piel' },
  { name: 'Neurología', description: 'Enfermedades del sistema nervioso' },
  { name: 'Traumatología y Ortopedia', description: 'Lesiones del sistema musculoesquelético' },
  { name: 'Oftalmología', description: 'Enfermedades de los ojos' },
  { name: 'Otorrinolaringología', description: 'Enfermedades de oído, nariz y garganta' },
  { name: 'Psiquiatría', description: 'Trastornos mentales y de la conducta' },
  { name: 'Endocrinología', description: 'Enfermedades del sistema endocrino' },
  { name: 'Neumología', description: 'Enfermedades del sistema respiratorio' },
  { name: 'Gastroenterología', description: 'Enfermedades del sistema digestivo' },
  { name: 'Nefrología', description: 'Enfermedades del riñón' },
  { name: 'Urología', description: 'Enfermedades del sistema urinario masculino' },
  { name: 'Oncología', description: 'Diagnóstico y tratamiento del cáncer' },
  { name: 'Reumatología', description: 'Enfermedades reumáticas y autoinmunes' },
  { name: 'Nutrición', description: 'Asesoramiento nutricional y dietético' },
  { name: 'Psicología Clínica', description: 'Evaluación y terapia psicológica' },
];

const cities = [
  { departamento: 'LP', nombre: 'La Paz' },
  { departamento: 'LP', nombre: 'El Alto' },
  { departamento: 'LP', nombre: 'Viacha' },
  { departamento: 'CB', nombre: 'Cochabamba' },
  { departamento: 'CB', nombre: 'Quillacollo' },
  { departamento: 'CB', nombre: 'Sacaba' },
  { departamento: 'SC', nombre: 'Santa Cruz de la Sierra' },
  { departamento: 'SC', nombre: 'Montero' },
  { departamento: 'SC', nombre: 'Warnes' },
  { departamento: 'OR', nombre: 'Oruro' },
  { departamento: 'PT', nombre: 'Potosí' },
  { departamento: 'PT', nombre: 'Tupiza' },
  { departamento: 'PT', nombre: 'Uyuni' },
  { departamento: 'TJ', nombre: 'Tarija' },
  { departamento: 'TJ', nombre: 'Yacuiba' },
  { departamento: 'CH', nombre: 'Sucre' },
  { departamento: 'BE', nombre: 'Trinidad' },
  { departamento: 'BE', nombre: 'Riberalta' },
  { departamento: 'PA', nombre: 'Cobija' },
];

const labStudies = [
  { nombre: 'Hemograma completo', categoria: 'Hematología' },
  { nombre: 'Glucemia en ayunas', categoria: 'Bioquímica' },
  { nombre: 'Hemoglobina glicosilada (HbA1c)', categoria: 'Bioquímica' },
  { nombre: 'Perfil lipídico', categoria: 'Bioquímica' },
  { nombre: 'Creatinina', categoria: 'Bioquímica' },
  { nombre: 'TSH', categoria: 'Endocrinología' },
  { nombre: 'Examen general de orina', categoria: 'Uroanálisis' },
  { nombre: 'Urocultivo', categoria: 'Microbiología' },
  { nombre: 'VIH (Elisa)', categoria: 'Serología' },
  { nombre: 'Proteína C reactiva', categoria: 'Inmunología' },
  { nombre: 'Grupo sanguíneo y factor Rh', categoria: 'Hematología' },
];

const imagingStudies = [
  { nombre: 'Radiografía de tórax', categoria: 'Radiología' },
  { nombre: 'Radiografía de abdomen', categoria: 'Radiología' },
  { nombre: 'Ecografía abdominal', categoria: 'Ecografía' },
  { nombre: 'Ecografía obstétrica', categoria: 'Ecografía' },
  { nombre: 'Ecocardiograma', categoria: 'Ecografía' },
  { nombre: 'TAC de cráneo', categoria: 'TAC' },
  { nombre: 'Resonancia magnética de cráneo', categoria: 'RMN' },
  { nombre: 'Mamografía', categoria: 'Radiología' },
  { nombre: 'Electrocardiograma (ECG)', categoria: 'Cardiología' },
];

async function main() {
  const prisma = new PrismaClient();
  
  console.log('Seeding database...');
  console.time('Seeding completed in');

  console.log('Seeding CIE-10 codes...');
  for (const code of cie10Codes) {
    await prisma.cie10Code.upsert({ where: { id: code.id }, update: code, create: code });
  }
  console.log(`  ✅ ${cie10Codes.length} CIE-10 codes`);

  console.log('Seeding medications...');
  for (const med of medications) {
    await prisma.medicationsCatalog.create({ data: med });
  }
  console.log(`  ✅ ${medications.length} medications`);

  console.log('Seeding cities...');
  for (const city of cities) {
    await prisma.boliviaCity.upsert({
      where: { departamento_nombre: { departamento: city.departamento, nombre: city.nombre } },
      update: { isActive: true },
      create: city,
    });
  }
  console.log(`  ✅ ${cities.length} cities`);

  console.log('Seeding lab studies...');
  for (const study of labStudies) {
    await prisma.labStudiesCatalog.create({ data: study });
  }
  console.log(`  ✅ ${labStudies.length} lab studies`);

  console.log('Seeding imaging studies...');
  for (const study of imagingStudies) {
    await prisma.imagingStudiesCatalog.create({ data: study });
  }
  console.log(`  ✅ ${imagingStudies.length} imaging studies`);

  console.log('Seeding specialties...');
  for (const spec of specialties) {
    await prisma.medicalSpecialty.upsert({ where: { name: spec.name }, update: { description: spec.description }, create: spec });
  }
  console.log(`  ✅ ${specialties.length} specialties`);

  console.timeEnd('Seeding completed in');
  console.log('🎉 Seeding complete!');

  await prisma.$disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });