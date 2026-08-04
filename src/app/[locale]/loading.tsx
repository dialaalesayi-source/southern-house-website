export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="animate-pulse">
      <span className="sr-only">Loading…</span>
      {/* Hero skeleton */}
      <div className="h-[90vh] max-h-[720px] w-full bg-southern-ivory" />
      {/* Trust strip skeleton */}
      <div className="grid grid-cols-2 gap-6 border-b border-black/5 px-6 py-10 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="mx-auto h-10 w-20 rounded bg-southern-ivory" />
        ))}
      </div>
      {/* Generic content block skeleton */}
      <div className="mx-auto max-w-content space-y-4 px-6 py-16">
        <div className="mx-auto h-8 w-64 rounded bg-southern-ivory" />
        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-48 rounded-lg bg-southern-ivory" />
          ))}
        </div>
      </div>
    </div>
  );
}
