import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === "ar";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: isRtl ? "flex-end" : "flex-start",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#1B3A5C",
          direction: isRtl ? "rtl" : "ltr",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
            padding: "8px 20px",
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.12)",
          }}
        >
          <span style={{ color: "#FFC93C", fontSize: 22, fontWeight: 600 }}>
            {locale === "ar" ? "بيت الجنوب" : "Southern House Company"}
          </span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            maxWidth: 900,
            textAlign: isRtl ? "right" : "left",
          }}
        >
          {dict.hero.headline}
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 36 }}>
          <span style={{ width: 60, height: 60, borderRadius: "50%", backgroundColor: "#FF5A5F" }} />
          <span style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#00B8A9", marginTop: 16 }} />
          <span style={{ width: 50, height: 50, borderRadius: "50%", backgroundColor: "#FFC93C", marginTop: 10 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
