// ─────────────────────────────────────────────────────────────
//  KCM FEDERAL EVENTS
//  Add / update events here. This is the ONLY file you edit for the
//  calendar — the Events page reads from it automatically.
//
//  For each event:
//    title       – name of the event                     (required)
//    start       – "YYYY-MM-DD"  (e.g. "2026-01-02")      (required*)
//    end         – "YYYY-MM-DD"  only for multi-day events (optional)
//    time        – free text, e.g. "7:00 PM" or "All day" (optional)
//    location    – where it's held                        (optional)
//    category    – one of the CATEGORIES keys below       (optional)
//    description – a sentence or two about the event       (optional)
//    logo        – path to the event's wordmark logo       (optional)
//    link        – sign-up / info URL                      (optional)
//    tbd         – true if the date isn't set yet          (optional)
//
//  * A dated event needs `start`. For a date-not-yet-set event, set
//    `tbd: true` and omit `start` — it stays off the calendar grid but
//    shows in "Upcoming" marked TBD. Once you know the date, delete
//    `tbd` and add `start`.
//
//  Dates use the calendar naturally; past events fall off the
//  "Upcoming" list automatically once their date passes.
// ─────────────────────────────────────────────────────────────

export interface KcmEvent {
  title: string;
  start?: string;
  end?: string;
  time?: string;
  location?: string;
  category?: keyof typeof CATEGORIES;
  description?: string;
  logo?: string;
  link?: string;
  tbd?: boolean;
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
export const events: KcmEvent[] = [
  {
    title: "Gospel Renewal Night",
    start: "2026-10-17",
    category: "gathering",
    logo: "/images/events/grn.png",
    description: "A night of worship and gospel renewal, gathering the KCM family across campuses.",
  },
  {
    title: "Fall Sports Festival",
    tbd: true,
    category: "sports",
    logo: "/images/events/fsf.png",
    description: "Inter-campus games and community — KCM's fall sports gathering. Date to be announced.",
  },
  {
    title: "WinterCon",
    start: "2026-12-28",
    end: "2026-12-30",
    category: "conference",
    logo: "/images/events/wintercon.png",
    description: "KCM's flagship winter conference — three days of teaching, worship, and community.",
  },
  {
    title: "Kingdom Come",
    tbd: true,
    category: "gathering",
    logo: "/images/events/kingdom-come.png",
    description: "One of KCM's two major federal gatherings, introducing students to the ministry and the heart of the Kingdom. Date to be announced.",
  },
  {
    title: "Spring Sports Festival",
    tbd: true,
    category: "sports",
    logo: "/images/events/ssf.png",
    description: "KCM's spring inter-campus sports gathering. Date to be announced.",
  },
  {
    title: "PowderPuff",
    tbd: true,
    category: "sports",
    logo: "/images/events/ppuff.png",
    description: "An inter-campus flag-football tournament bringing the KCM family together. Date to be announced.",
  },
  {
    title: "Short-Term Summer Missions",
    tbd: true,
    category: "missions",
    logo: "/images/events/stsm.png",
    description: "KCM's Short-Term Summer Missions — sending collegians to serve on the local and global mission field. Date to be announced.",
  },
];
