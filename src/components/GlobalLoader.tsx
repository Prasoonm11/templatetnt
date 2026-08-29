"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Small delay to ensure render smooth fade transition
      setTimeout(() => setIsLoading(false), 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout to guarantee visual loader closes
      const timeout = setTimeout(handleLoad, 3000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  return <LoadingScreen isLoading={isLoading} />;
}
