export const pageview = (url: string) => {
    window.gtag("config", "G-0TPFNCP0H5", {
      page_path: url,
    });
  };
  
  export const event = ({
    action,
    category,
    label,
    value,
  }: {
    action: string;
    category: string;
    label: string;
    value: number;
  }) => {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  };
  