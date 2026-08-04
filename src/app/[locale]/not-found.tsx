import Link from "next/link";
import Button from "@/components/ui/Button";

// Note: Next.js does not guarantee `params` are passed to not-found.tsx, so
// this page shows both languages rather than guessing the visitor's locale.
export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-3 px-6 text-center">
      <span aria-hidden="true" className="mb-4 text-6xl">
        🎈
      </span>

      <div>
        <h1 className="font-display text-3xl font-semibold text-southern-navy">Page not found</h1>
        <p className="mt-2 max-w-sm text-slate">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="mt-6">
          <Button href="/en" variant="funplace-primary" size="md">
            Back to homepage
          </Button>
        </div>
      </div>

      <div className="mt-10 border-t border-black/5 pt-8" dir="rtl">
        <h2 className="font-display text-3xl font-semibold text-southern-navy">الصفحة غير موجودة</h2>
        <p className="mt-2 max-w-sm text-slate">
          الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.
        </p>
        <div className="mt-6">
          <Link
            href="/ar"
            className="inline-flex items-center justify-center rounded-full bg-funplace-coral px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.03]"
          >
            العودة إلى الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
