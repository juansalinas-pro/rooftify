export {}; // Asegura que no sea un módulo global

declare global {
  interface Window {
    gtag: (command: string, target: string, params?: any) => void;
  }
}
