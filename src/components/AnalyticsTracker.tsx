"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-EW2WW7H2V1", {
      page_path: url,
    });
  }
};

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  return null;
}