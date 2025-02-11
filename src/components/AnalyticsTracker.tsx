"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-C5ELGD4Y2Y", {
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