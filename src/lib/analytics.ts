export const pageview = (url: string) => {
  window.gtag("config", "G-C5ELGD4Y2Y", {
    page_path: url,
  });
};

interface GAEvent {
  action: string;
  category: string;
  label: string;
  value: any;
  [key: string]: any; // Permite propiedades adicionales
}

export const event = ({ action, category, label, value, ...rest }: GAEvent) => {
  // Convertir el valor a una cadena JSON si es un objeto
  const formattedValue = typeof value === "object" ? JSON.stringify(value) : value;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: formattedValue,
    ...rest, // Propiedades adicionales
  });
};