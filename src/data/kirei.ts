import type { Idioma } from '../i18n/ui';

type Texto = Record<Idioma, string>;

/** Silueta del diente del ícono de Kirei (mismo trazo que su landing). */
export const DIENTE =
  'M256 150c-26-22-62-34-96-24-46 14-66 62-56 112 8 40 26 70 34 112 6 30 12 66 36 70 30 4 34-40 44-74 8-26 20-40 38-40s30 14 38 40c10 34 14 78 44 74 24-4 30-40 36-70 8-42 26-72 34-112 10-50-10-98-56-112-34-10-70 2-96 24z';

/** El día de una clínica, con los módulos reales de Kirei (textos de su landing). */
export const paradas: { hora: string; modulo: Texto; titulo: Texto }[] = [
  {
    hora: '07:30',
    modulo: { es: 'Recordatorios', en: 'Reminders' },
    titulo: { es: 'Tus pacientes ya saben a qué hora vienen.', en: 'Your patients already know when to come in.' },
  },
  {
    hora: '09:00',
    modulo: { es: 'Aviso de privacidad', en: 'Privacy notice' },
    titulo: { es: 'El paciente nuevo firma en la tablet. Listo.', en: 'The new patient signs on the tablet. Done.' },
  },
  {
    hora: '10:15',
    modulo: { es: 'Historia clínica NOM-004', en: 'NOM-004 clinical record' },
    titulo: { es: 'Un expediente que cumple, sin llenar de más.', en: 'A record that complies, with no extra typing.' },
  },
  {
    hora: '11:40',
    modulo: { es: 'Recetas', en: 'Prescriptions' },
    titulo: { es: 'La receta te detiene antes del error.', en: 'The prescription stops you before the mistake.' },
  },
  {
    hora: '13:10',
    modulo: { es: 'Presupuestos y cobro', en: 'Quotes and payments' },
    titulo: { es: 'Un presupuesto claro se aprueba más rápido.', en: 'A clear quote gets approved faster.' },
  },
  {
    hora: '16:00',
    modulo: { es: 'Inventario', en: 'Inventory' },
    titulo: { es: 'La resina se estaba acabando. Ya lo sabías.', en: 'The resin was running out. You already knew.' },
  },
  {
    hora: '19:30',
    modulo: { es: 'Reportes', en: 'Reports' },
    titulo: { es: 'Cierras el día sabiendo cómo vas.', en: 'You close the day knowing how it went.' },
  },
  {
    hora: '23:48',
    modulo: { es: 'Reservas en línea', en: 'Online booking' },
    titulo: { es: 'Alguien reservó mientras dormías.', en: 'Someone booked while you slept.' },
  },
];
