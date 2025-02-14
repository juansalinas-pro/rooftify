export const pageview = (url: string) => {
    window.gtag("config", "G-C5ELGD4Y2Y", {
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
    value: any;
  }) => {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  };
  