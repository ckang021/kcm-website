// ─────────────────────────────────────────────────────────────
//  KCM FEDERAL EVENTS
//  Add / update events here. This is the ONLY file you edit for the
//  calendar — the Events page reads from it automatically.
//
//  For each event:
//    title       – name of the event                     (required)
//    start       – "YYYY-MM-DD"  (e.g. "2026-01-02")      (required)
//    end         – "YYYY-MM-DD"  only for multi-day events (optional)
//    time        – free text, e.g. "7:00 PM" or "All day" (optional)
//    location    – where it's held                        (optional)
//    category    – one of the CATEGORIES keys below       (optional)
//    description – a sentence or two about the event       (optional)
//    link        – sign-up / info URL                      (optional)
//
//  Dates use the calendar naturally; past events fall off the
//  "Upcoming" list automatically once their date passes.
// ─────────────────────────────────────────────────────────────

export interface KcmEvent {
  title: string;
  start: string;
  end?: string;
  time?: string;
  location?: string;
  category?: keyof typeof CATEGORIES;
  description?: string;
  link?: string;
}

// Category labels (kept monochrome to match the site).
export const CATEGORIES = {
  conference: "Conference",
  retreat: "Retreat",
  sports: "Sports",
  missions: "Missions",
  gathering: "Gathering",
  other: "Event",
} as const;

// ── EVENTS ──────────────────────────────────────────────────
// NOTE: the entries below are PLACEHOLDER examples so the calendar
// isn't empty. Replace them with the real federal dates.
export const events: KcmEvent[] = [
  {
    title: "Fall Sports Tournament",
    start: "2026-10-17",
    time: "9:00 AM",
    location: "Southern California",
    category: "sports",
    description: "Annual inter-campus sports tournament bringing the KCM family together.",
  },
  {
    title: "Gospel Night",
    start: "2026-11-14",
    time: "7:00 PM",
    category: "gathering",
    description: "A federal worship and gospel gathering across the campuses.",
  },
  {
    title: "WinterCon",
    start: "2027-01-02",
    end: "2027-01-04",
    time: "All day",
    location: "TBD",
    category: "conference",
    description: "KCM's flagship winter conference — teaching, worship, and community.",
  },
  {
    title: "Short-Term Summer Missions — Send-off",
    start: "2027-06-13",
    time: "TBD",
    category: "missions",
    description: "Commissioning of the STSM teams heading out to the nations.",
  },
];
