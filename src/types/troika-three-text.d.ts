// troika-three-text no publica tipos; sólo se declara lo que usa el proyecto.
declare module 'troika-three-text' {
  export function configureTextBuilder(config: { useWorker?: boolean }): void;
}
