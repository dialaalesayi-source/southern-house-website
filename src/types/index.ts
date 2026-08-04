export type BranchStatus = "open" | "soon";

export interface Branch {
  id: string;
  /** [PLACEHOLDER] Replace with the real branch/mall name once confirmed. */
  name: { en: string; ar: string };
  city: { en: string; ar: string };
  status: BranchStatus;
  /** Local image path — replace with real branch photography. */
  image: string;
  /** Optional Google Maps link — add once addresses are finalized. */
  mapsUrl?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  altEn: string;
  altAr: string;
}
