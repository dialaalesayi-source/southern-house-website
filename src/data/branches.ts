import type { Branch } from "@/types";

// ---------------------------------------------------------------------------
// Fun Place branches
// To add a new branch: copy an object below, give it a unique `id`, and fill
// in the fields. That's it — the Branches section on the homepage (and the
// future /branches page) renders directly from this array.
//
// [PLACEHOLDER] Names, cities, and map links below are provisional — replace
// with confirmed branch details.
// ---------------------------------------------------------------------------
export const branches: Branch[] = [
  {
    id: "branch-1",
    name: { en: "Fun Place — Al Azzam Mall", ar: "مكان المرح — العزام مول" },
    city: { en: "Najran", ar: "نجران" },
    status: "open",
    image: "/images/images/logos/IMG_4438.jpg",
  },
  {
    id: "branch-2",
    name: { en: "Fun Place — Lulu Hypermarket AlMalaz", ar: "مكان المرح — لولو هايبرماركت الملز" },
    city: { en: "Riyadh", ar: "الرياض" },
    status: "open",
    image: "/images/images/logos/lulu-fun.jpg",
    mapsUrl: "https://share.google/9sQ47hCnSC5FhfPdp",
  },
  {
    id: "branch-3",
    name: { en: "Fun Place — Rayuf Park Mall", ar: "مكان المرح — ريوف بارك" },
    city: { en: "AlQunfudhah", ar: "القنفذة" },
    status: "soon",
    image: "/images/images/logos/IMG_4448.jpg",
  },
];
