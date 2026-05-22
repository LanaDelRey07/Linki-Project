export const cie10Codes = [
  // Enfermedades infecciosas (A00-B99)
  { id: 'A09', code: 'A09', descriptionEs: 'Diarrea y gastroenteritis presuntas infecciosas', category: 'Infecciosas' },
  { id: 'B349', code: 'B349', descriptionEs: 'Infección viral no especificada', category: 'Infecciosas' },
  { id: 'B829', code: 'B82.9', descriptionEs: 'Helmintiasis intestinal no especificada', category: 'Infecciosas' },

  // Neoplasias (C00-D49)
  { id: 'C509', code: 'C50.9', descriptionEs: 'Neoplasia maligna de mama, parte no especificada', category: 'Neoplasias' },
  { id: 'C189', code: 'C18.9', descriptionEs: 'Neoplasia maligna del colon, parte no especificada', category: 'Neoplasias' },
  { id: 'C349', code: 'C34.9', descriptionEs: 'Neoplasia maligna del bronquio y pulmón, parte no especificada', category: 'Neoplasias' },

  // Enfermedades de la sangre (D50-D89)
  { id: 'D509', code: 'D50.9', descriptionEs: 'Anemia ferropénica no especificada', category: 'Sangre' },

  // Endocrinas (E00-E89)
  { id: 'E10', code: 'E10', descriptionEs: 'Diabetes mellitus tipo 1', category: 'Endocrinas' },
  { id: 'E11', code: 'E11', descriptionEs: 'Diabetes mellitus tipo 2', category: 'Endocrinas' },
  { id: 'E119', code: 'E11.9', descriptionEs: 'Diabetes mellitus tipo 2 sin complicaciones', category: 'Endocrinas' },
  { id: 'E039', code: 'E03.9', descriptionEs: 'Hipotiroidismo no especificado', category: 'Endocrinas' },
  { id: 'E059', code: 'E05.9', descriptionEs: 'Tirotoxicosis no especificada', category: 'Endocrinas' },
  { id: 'E669', code: 'E66.9', descriptionEs: 'Obesidad no especificada', category: 'Endocrinas' },
  { id: 'E785', code: 'E78.5', descriptionEs: 'Hiperlipidemia no especificada', category: 'Endocrinas' },

  // Mentales (F01-F99)
  { id: 'F32', code: 'F32', descriptionEs: 'Episodio depresivo', category: 'Mentales' },
  { id: 'F329', code: 'F32.9', descriptionEs: 'Episodio depresivo no especificado', category: 'Mentales' },
  { id: 'F41', code: 'F41', descriptionEs: 'Otros trastornos de ansiedad', category: 'Mentales' },
  { id: 'F410', code: 'F41.0', descriptionEs: 'Trastorno de pánico', category: 'Mentales' },
  { id: 'F411', code: 'F41.1', descriptionEs: 'Trastorno de ansiedad generalizada', category: 'Mentales' },

  // Sistema nervioso (G00-G99)
  { id: 'G409', code: 'G40.9', descriptionEs: 'Epilepsia no especificada', category: 'Neurológicas' },
  { id: 'G43', code: 'G43', descriptionEs: 'Migraña', category: 'Neurológicas' },
  { id: 'G439', code: 'G43.9', descriptionEs: 'Migraña no especificada', category: 'Neurológicas' },

  // Ojo y anexos (H00-H59)
  { id: 'H529', code: 'H52.9', descriptionEs: 'Trastorno de la refracción no especificado', category: 'Oftalmológicas' },

  // Oído (H60-H95)
  { id: 'H669', code: 'H66.9', descriptionEs: 'Otitis media no especificada', category: 'Otológicas' },

  // Circulatorio (I00-I99)
  { id: 'I10', code: 'I10', descriptionEs: 'Hipertensión esencial (primaria)', category: 'Cardiovasculares' },
  { id: 'I119', code: 'I11.9', descriptionEs: 'Enfermedad cardíaca hipertensiva sin insuficiencia cardíaca', category: 'Cardiovasculares' },
  { id: 'I2510', code: 'I25.10', descriptionEs: 'Enfermedad arteriosclerótica del corazón sin angina', category: 'Cardiovasculares' },
  { id: 'I259', code: 'I25.9', descriptionEs: 'Enfermedad isquémica crónica del corazón no especificada', category: 'Cardiovasculares' },
  { id: 'I509', code: 'I50.9', descriptionEs: 'Insuficiencia cardíaca no especificada', category: 'Cardiovasculares' },
  { id: 'I489', code: 'I48.9', descriptionEs: 'Fibrilación y aleteo auricular, no especificados', category: 'Cardiovasculares' },

  // Respiratorio (J00-J99)
  { id: 'J00', code: 'J00', descriptionEs: 'Nasofaringitis aguda (resfriado común)', category: 'Respiratorias' },
  { id: 'J069', code: 'J06.9', descriptionEs: 'Infección aguda de las vías respiratorias superiores, no especificada', category: 'Respiratorias' },
  { id: 'J189', code: 'J18.9', descriptionEs: 'Neumonía no especificada', category: 'Respiratorias' },
  { id: 'J20', code: 'J20', descriptionEs: 'Bronquitis aguda', category: 'Respiratorias' },
  { id: 'J209', code: 'J20.9', descriptionEs: 'Bronquitis aguda no especificada', category: 'Respiratorias' },
  { id: 'J459', code: 'J45.9', descriptionEs: 'Asma no especificada', category: 'Respiratorias' },
  { id: 'J449', code: 'J44.9', descriptionEs: 'Enfermedad pulmonar obstructiva crónica no especificada', category: 'Respiratorias' },

  // Digestivo (K00-K95)
  { id: 'K297', code: 'K29.7', descriptionEs: 'Gastritis no especificada', category: 'Digestivas' },
  { id: 'K30', code: 'K30', descriptionEs: 'Dispepsia', category: 'Digestivas' },
  { id: 'K259', code: 'K25.9', descriptionEs: 'Úlcera gástrica no especificada', category: 'Digestivas' },
  { id: 'K3580', code: 'K35.80', descriptionEs: 'Apendicitis aguda no especificada', category: 'Digestivas' },
  { id: 'K802', code: 'K80.2', descriptionEs: 'Cálculo de la vesícula biliar sin colecistitis', category: 'Digestivas' },

  // Piel (L00-L99)
  { id: 'L309', code: 'L30.9', descriptionEs: 'Dermatitis no especificada', category: 'Dermatológicas' },
  { id: 'L709', code: 'L70.9', descriptionEs: 'Acné no especificado', category: 'Dermatológicas' },

  // Musculoesquelético (M00-M99)
  { id: 'M549', code: 'M54.9', descriptionEs: 'Dolor de espalda no especificado', category: 'Musculoesqueléticas' },
  { id: 'M793', code: 'M79.3', descriptionEs: 'Panniculitis no especificada', category: 'Musculoesqueléticas' },

  // Genitourinario (N00-N99)
  { id: 'N109', code: 'N10.9', descriptionEs: 'Nefritis tubulointersticial aguda no especificada', category: 'Genitourinarias' },
  { id: 'N390', code: 'N39.0', descriptionEs: 'Infección de las vías urinarias, sitio no especificado', category: 'Genitourinarias' },

  // Embarazo (O00-O9A)
  { id: 'O80', code: 'O80', descriptionEs: 'Parto único espontáneo', category: 'Obstétricas' },

  // Causas externas (S00-T88)
  { id: 'S009', code: 'S00.9', descriptionEs: 'Lesión superficial no especificada de la cabeza', category: 'Trauma' },
  { id: 'S829', code: 'S82.9', descriptionEs: 'Fractura no especificada de la pierna', category: 'Trauma' },

  // Factores que influyen (Z00-Z99)
  { id: 'Z00', code: 'Z00', descriptionEs: 'Examen general y evaluación de personas sin diagnóstico', category: 'Preventivas' },
  { id: 'Z000', code: 'Z00.0', descriptionEs: 'Examen médico general', category: 'Preventivas' },
  { id: 'Z719', code: 'Z71.9', descriptionEs: 'Consulta no especificada', category: 'Preventivas' },
  { id: 'Z989', code: 'Z98.9', descriptionEs: 'Estado postprocedimiento no especificado', category: 'Preventivas' },

  // COVID
  { id: 'U071', code: 'U07.1', descriptionEs: 'COVID-19, virus identificado', category: 'Infecciosas' },
  { id: 'U072', code: 'U07.2', descriptionEs: 'COVID-19, virus no identificado', category: 'Infecciosas' },
];