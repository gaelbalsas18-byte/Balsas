export type Intent =
  | "greeting"
  | "farewell"
  | "thanks"
  | "clinical_case"
  | "product"
  | "brand"
  | "comparison"
  | "procedure"
  | "general";

const greetings = [
  "hola",
  "buenas",
  "buen día",
  "buenos días",
  "buenas tardes",
  "buenas noches",
  "hey",
  "qué tal",
  "como estas",
];

const farewells = [
  "adiós",
  "hasta luego",
  "nos vemos",
  "bye",
  "hasta pronto",
];

const thanks = [
  "gracias",
  "muchas gracias",
  "te agradezco",
];

const comparisonWords = [
  "vs",
  "versus",
  "comparar",
  "mejor",
];

const procedureWords = [
  "protocolo",
  "procedimiento",
  "pasos",
  "cómo hacer",
];

const clinicalWords = [
  "fractura",
  "caries",
  "oclusal",
  "clase",
  "paciente",
  "endodoncia",
  "restauración",
  "resina",
  "cementación",
  "corona",
  "incrustación",
  "operatoria",
  "implante",
  "adhesivo",
  "cemento",
];

export function detectIntent(text: string): Intent {

  const q = text.toLowerCase();

  if (greetings.some(w => q.includes(w)))
    return "greeting";

  if (farewells.some(w => q.includes(w)))
    return "farewell";

  if (thanks.some(w => q.includes(w)))
    return "thanks";

  if (comparisonWords.some(w => q.includes(w)))
    return "comparison";

  if (procedureWords.some(w => q.includes(w)))
    return "procedure";

  if (clinicalWords.some(w => q.includes(w)))
    return "clinical_case";

  return "general";
}


