"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Button from "@/components/ui/Button";

// Minimal inline copy — error.tsx is a client component and can't call the
// server-only getDictionary(), so this keeps its own tiny bilingual strings
// rather than pulling in the full dictionary.
const copy = {
  en: {
    title: "Something went wrong",
    body: "We couldn't load this page. Please try again.",
    retry: "Try again",
  },
  ar: {
    title: "حدث خطأ ما",
    body: "تعذّر تحميل هذه الصفحة. يرجى المحاولة مرة أخرى.",
    retry: "أعد المحاولة",
  },
};

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const params = useParams();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const t = copy[locale];

  useEffect(() => {
    // Replace with real error reporting (Sentry, etc.) before production launch.
    console.error(error);
  }, [error]);

  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center"
    >
      <h1 className="font-display text-3xl font-semibold text-southern-navy">{t.title}</h1>
      <p className="max-w-sm text-slate">{t.body}</p>
      <Button onClick={reset} variant="southern-primary" size="md">
        {t.retry}
      </Button>
    </div>
  );
}
