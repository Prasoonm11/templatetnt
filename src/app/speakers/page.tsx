"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SpeakersRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#speakers");
  }, [router]);

  return null;
}
