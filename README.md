# Linki — Historia Clínica Digital

> Salud accesible para Bolivia · Conforme a la RM 0090/2008

## Arquitectura

```
Linki/
├── backend/          # NestJS + Prisma + PostgreSQL
│   ├── prisma/
│   │   ├── schema.prisma     # 30 tablas, modelo completo
│   │   └── seed/             # Datos semilla (CIE-10, ciudades, medicamentos)
│   └── src/
│       ├── auth/             # JWT register/login/refresh
│       ├── patient/          # Onboarding Wizard (6 pasos)
│       ├── clinical/         # Encuentro Clínico SOAP (inmutable)
│       ├── appointment/      # Reservas (Bloque B)
│       ├── catalog/          # CIE-10, medicamentos, ciudades
│       ├── access/           # Control de acceso paciente→médico
│       └── prisma/           # PrismaService global
│
└── frontend/         # Next.js 16 + Tailwind CSS
    └── src/
        ├── app/
        │   ├── page.tsx               # Landing page
        │   ├── auth/login/             # Login
        │   ├── auth/register/          # Registro
        │   └── onboarding/             # Wizard 6 pasos
        ├── components/
        │   ├── ui/                    # Input, Select, Toggle, Button, ProgressBar
        │   └── wizard/                 # Step1-6 + Success
        ├── lib/
        │   ├── api.ts                  # Axios con interceptores JWT
        │   └── utils.ts                # cn(), calculateIMC(), departamentos
        └── types/                      # TypeScript interfaces
```

## Puesta en Marcha

### Requisitos
- Node.js ≥ 20
- PostgreSQL ≥ 14
- npm ≥ 8

### 1. Base de Datos

```bash
# Crear la base de datos
createdb -U postgres linki_mvp

# O configurar tu propio usuario/contraseña en backend/.env
```

### 2. Backend

```bash
cd backend

# Instalar dependencias
npm install

# Generar Prisma Client
npx prisma generate

# Ejecutar migración inicial
npx prisma migrate dev --name init

# Poblar catálogos (CIE-10, medicamentos, ciudades, especialidades)
npx prisma db seed

# Iniciar en modo desarrollo
npm run start:dev
```

El backend corre en `http://localhost:3000/api`

### 3. Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
```

El frontend corre en `http://localhost:3001`

## Esquema de Base de Datos (30 tablas)

### Identidad
| Tabla | Propósito |
|-------|-----------|
| `users` | Solo autenticación (email + password) |
| `user_roles` | Roles flexibles (PATIENT, DOCTOR, ADMIN) |

### Paciente (Bloque A)
| Tabla | Propósito |
|-------|-----------|
| `patient_profiles` | Perfil maestro + progreso del wizard |
| `patient_identification` | Paso 1: Datos personales |
| `emergency_contacts` | Paso 2: Contacto de emergencia |
| `patient_background` | Pasos 3-6: Antecedentes, hábitos, gineco |
| `patient_allergies` | Detalle de alergias |
| `patient_chronic_conditions` | Detalle de enfermedades crónicas |
| `patient_medications` | Medicamentos actuales |
| `patient_surgeries` | Cirugías previas |
| `patient_hospitalizations` | Hospitalizaciones previas |
| `patient_family_history` | Antecedentes familiares |

### Versionado (Inmutabilidad Bloque A)
| Tabla | Propósito |
|-------|-----------|
| `patient_background_versions` | Snapshots JSON del historial del paciente |

### Médico
| Tabla | Propósito |
|-------|-----------|
| `doctor_profiles` | Perfil profesional |
| `medical_specialties` | Catálogo de especialidades |

### Reserva (Bloque B)
| Tabla | Propósito |
|-------|-----------|
| `appointments` | Motivo de consulta + datos de la cita |

### Encuentro Clínico (Bloque C) — Inmutable
| Tabla | Propósito |
|-------|-----------|
| `clinical_encounters` | Registro SOAP completo |
| `clinical_addendums` | Notas aclaratorias (RM 0090) |
| `encounter_diagnoses` | Diagnósticos CIE-10 |
| `encounter_system_reviews` | Revisión por sistemas |
| `encounter_prescriptions` | Receta médica |
| `encounter_lab_orders` | Órdenes de laboratorio |
| `encounter_imaging_orders` | Órdenes de imagenología |
| `encounter_referrals` | Derivaciones |

### Catálogos
| Tabla | Propósito |
|-------|-----------|
| `cie10_codes` | ~60 códigos CIE-10 (MVP) |
| `medications_catalog` | ~45 medicamentos LINAME Bolivia |
| `lab_studies_catalog` | Estudios de laboratorio |
| `imaging_studies_catalog` | Estudios de imagenología |
| `bolivia_cities` | Ciudades por departamento |
| `patient_doctor_access` | Control de acceso |

## Endpoints REST

```
Auth
  POST /api/auth/register     → Registro (PACIENTE o DOCTOR)
  POST /api/auth/login        → Login
  POST /api/auth/refresh      → Renovar token

Paciente (Bloque A - Wizard)
  POST /api/patient/profile/step-1  → Identificación
  POST /api/patient/profile/step-2  → Contacto emergencia
  POST /api/patient/profile/step-3  → Antecedentes personales
  POST /api/patient/profile/step-4  → Antecedentes familiares
  POST /api/patient/profile/step-5  → Hábitos
  POST /api/patient/profile/step-6  → Gineco-obstétrico
  GET  /api/patient/profile         → Perfil completo
  GET  /api/patient/profile/versions → Historial de versiones

Reservas (Bloque B)
  POST /api/appointments      → Crear reserva
  GET  /api/appointments      → Lista de reservas

Clínico (Bloque C - Médico)
  POST /api/clinical/encounters              → Crear encuentro
  PATCH /api/clinical/encounters/:id         → Actualizar (solo DRAFT)
  POST /api/clinical/encounters/:id/close    → Cerrar (INMUTABLE)
  POST /api/clinical/encounters/:id/addendum  → Nota aclaratoria
  GET  /api/clinical/patient/:id/summary      → Resumen del paciente

Catálogos
  GET /api/catalog/cie10?search=diabetes
  GET /api/catalog/medications?search=amlo
  GET /api/catalog/departments/:dept/cities

Acceso
  POST /api/access/grant    → Paciente otorga acceso a médico
  DELETE /api/access/:id     → Paciente revoca acceso
```

## Inmutabilidad (RM 0090/2008)

Una vez que el médico presiona **"Cerrar Consulta"**:

1. El campo `status` cambia de `DRAFT` a `CLOSED`
2. Se registra `closedAt` y `closedBy`
3. El backend **rechaza** cualquier PATCH/PUT/DELETE (EncounterImmutabilityGuard)
4. Correcciones se agregan como **Notas Aclaratorias** (`clinical_addendums`) — registros append-only con timestamp y autor
5. El paciente puede actualizar su Bloque A, pero cada cambio genera un snapshot en `patient_background_versions`

## Próximos Pasos

- [ ] Ejecutar migraciones contra PostgreSQL
- [ ] Poblar catálogos con seed
- [ ] Dashboard médico (resumen de paciente + formulario SOAP)
- [ ] Búsqueda de médicos con geolocalización
- [ ] Validación de CI boliviano (digito verificador)
- [ ] Sistema de notificaciones
- [ ] Tests unitarios y e2e# Linki-Project
