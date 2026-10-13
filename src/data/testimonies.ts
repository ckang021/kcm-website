// ─────────────────────────────────────────────────────────────
//  STSM TESTIMONIES — 2026 teams
//  Every student who went gets a card (grouped by team) and their own
//  page at /missions/testimonies/<team>/<name>, e.g.
//  /missions/testimonies/cambodia/chloe-chang
//
//    team     – slug from missions.ts (cambodia, south-india, …)
//    name     – student's name (the page URL is made from it)
//    school   – e.g. "UCLA" (optional for leaders)
//    year     – year in school, 1–5 (optional for leaders)
//    role     – "Leader" or "Co-leader" for the team's leaders; they show
//               first on their team with a label on their photo
//    excerpt  – optional: a line from their testimony, shown on the card
//    body     – their testimony, one string per paragraph
//    photo    – headshot (cards + the top of their page)
//    ministryPhoto – a photo of them doing ministry, shown inside their
//               testimony. Until it is added, a temporary stock photo shows.
//
//  Roster from the "TENTATIVE TEAMS" sheet (2026 tab), plus Daniel Kwak
//  (Cambodia) and each team's Leader + Co-leader from the kcm-headshots folder. Photos: kcm-headshots.
//  MOCKUP: no testimonies have been written yet, so student pages fall
//  back to placeholder paragraphs until `body` is filled in.
// ─────────────────────────────────────────────────────────────

export interface Student {
  team: string;
  name: string;
  school?: string;
  year?: number;
  role?: "Leader" | "Co-leader";
  excerpt?: string;
  body?: string[];
  photo?: string;
  ministryPhoto?: string;
}

/** URL-safe slug from a student's name: "Song Yi Baik" → "song-yi-baik" */
export const studentSlug = (s: Student) =>
  s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const yearLabel = (y: number) =>
  `${y}${y === 1 ? "st" : y === 2 ? "nd" : y === 3 ? "rd" : "th"} year`;

/** Temporary stand-in until a student's ministry photo is added (mockup only).
 *  Random stock photo from picsum.photos, fixed per student. */
export const tempMinistryPhoto = (s: Student) =>
  `https://picsum.photos/seed/kcm-${studentSlug(s)}/1600/1000`;

/** Shown until a student's testimony is added (mockup only). */
export const placeholderBody = (country: string) => [
  `[Placeholder] Open with where they were before the trip — what they expected going into ${country}, and what they were wrestling with.`,
  "[Placeholder] The heart of the testimony: a specific moment from serving alongside the missionaries and the local church, and what God showed them through it.",
  "[Placeholder] Close with how the trip has shaped them since coming home — on campus, in their walk with God, and in their heart for the nations.",
];

export const students: Student[] = [
  // ── Cambodia (12 + 2 leaders) ──
  { team: "cambodia", name: "Brian Lee", role: "Leader", photo: "/images/testimonies/cambodia/brian-lee.jpg" },
  { team: "cambodia", name: "Kambria Salido", role: "Co-leader", photo: "/images/testimonies/cambodia/kambria-salido.jpg" },
  { team: "cambodia", name: "Chloe Chang", school: "UCSD", year: 1, photo: "/images/testimonies/cambodia/chloe-chang.jpg" },
  { team: "cambodia", name: "Daniel Cha", school: "UCR", year: 4, photo: "/images/testimonies/cambodia/daniel-cha.jpg" },
  { team: "cambodia", name: "Daniel Kwak", school: "UCI", year: 1, photo: "/images/testimonies/cambodia/daniel-kwak.jpg" },
  { team: "cambodia", name: "Eugena Kang", school: "UCSD", year: 2, photo: "/images/testimonies/cambodia/eugena-kang.jpg" },
  { team: "cambodia", name: "Evelyn Kim", school: "UCLA", year: 1, photo: "/images/testimonies/cambodia/evelyn-kim.jpg" },
  { team: "cambodia", name: "Faith Park", school: "UCSD", year: 2, photo: "/images/testimonies/cambodia/faith-park.jpg" },
  { team: "cambodia", name: "Ian Kim", school: "UCSD", year: 2, photo: "/images/testimonies/cambodia/ian-kim.jpg" },
  { team: "cambodia", name: "Janice Ji", school: "UCI", year: 4, photo: "/images/testimonies/cambodia/janice-ji.jpg" },
  { team: "cambodia", name: "Kyle Chang", school: "UCSB", year: 4, photo: "/images/testimonies/cambodia/kyle-chang.jpg" },
  { team: "cambodia", name: "Nathan Cho", school: "UCI", year: 1, photo: "/images/testimonies/cambodia/nathan-cho.jpg" },
  { team: "cambodia", name: "Serena Que", school: "UCLA", year: 1, photo: "/images/testimonies/cambodia/serena-que.jpg" },
  { team: "cambodia", name: "Stephen Kim", school: "UCR", year: 3, photo: "/images/testimonies/cambodia/stephen-kim.jpg" },

  // ── South India (17 + 2 leaders) ──
  { team: "south-india", name: "Janette Park", role: "Leader", photo: "/images/testimonies/south-india/janette-park.jpg" },
  { team: "south-india", name: "John Song", role: "Co-leader", photo: "/images/testimonies/south-india/john-song.jpg" },
  { team: "south-india", name: "Ashlee Shon", school: "UCLA", year: 2, photo: "/images/testimonies/south-india/ashlee-shon.jpg" },
  { team: "south-india", name: "Chloe Pyo", school: "UCI", year: 1, photo: "/images/testimonies/south-india/chloe-pyo.jpg" },
  { team: "south-india", name: "Elijah Kim", school: "Cal Poly Pomona", year: 4, photo: "/images/testimonies/south-india/elijah-kim.jpg" },
  { team: "south-india", name: "Elle Hwang", school: "Pepperdine", year: 1, photo: "/images/testimonies/south-india/elle-hwang.jpg" },
  { team: "south-india", name: "Erica Song", school: "UCLA", year: 3, photo: "/images/testimonies/south-india/erica-song.jpg" },
  { team: "south-india", name: "Ezra Kim", school: "Irvine Valley College", year: 1, photo: "/images/testimonies/south-india/ezra-kim.jpg" },
  { team: "south-india", name: "Haekyo Claire Oh", school: "UCLA", year: 1, photo: "/images/testimonies/south-india/haekyo-claire-oh.jpg" },
  { team: "south-india", name: "Joonsuk Justin Choi", school: "UCSD", year: 1, photo: "/images/testimonies/south-india/joonsuk-justin-choi.jpg" },
  { team: "south-india", name: "Joshua Chun", school: "UCSD", year: 3, photo: "/images/testimonies/south-india/joshua-chun.jpg" },
  { team: "south-india", name: "Joshua Lee", school: "UCR", year: 4, photo: "/images/testimonies/south-india/joshua-lee.jpg" },
  { team: "south-india", name: "Kaitlyn Wong", school: "Biola", year: 1, photo: "/images/testimonies/south-india/kaitlyn-wong.jpg" },
  { team: "south-india", name: "Karen Kim", school: "UCI", year: 2, photo: "/images/testimonies/south-india/karen-kim.jpg" },
  { team: "south-india", name: "Kristen Lee", school: "UCR", year: 2, photo: "/images/testimonies/south-india/kristen-lee.jpg" },
  { team: "south-india", name: "Moses Paik", school: "UCSB", year: 1, photo: "/images/testimonies/south-india/moses-paik.jpg" },
  { team: "south-india", name: "Noah Park", school: "UCR", year: 3, photo: "/images/testimonies/south-india/noah-park.jpg" },
  { team: "south-india", name: "Sean Cho", school: "UCI", year: 1, photo: "/images/testimonies/south-india/sean-cho.jpg" },
  { team: "south-india", name: "Timothy Joo", school: "UCSB", year: 4, photo: "/images/testimonies/south-india/timothy-joo.jpg" },

  // ── Philippines (12 + 2 leaders) ──
  { team: "philippines", name: "Ryan Moon", role: "Leader", photo: "/images/testimonies/philippines/ryan-moon.jpg" },
  { team: "philippines", name: "Jamie Choi", role: "Co-leader", photo: "/images/testimonies/philippines/jamie-choi.jpg" },
  { team: "philippines", name: "Abigail Shin", school: "USC", year: 1, photo: "/images/testimonies/philippines/abigail-shin.jpg" },
  { team: "philippines", name: "David Nam", school: "UCI", year: 3, photo: "/images/testimonies/philippines/david-nam.jpg" },
  { team: "philippines", name: "Elise Hong", school: "UCI", year: 3, photo: "/images/testimonies/philippines/elise-hong.jpg" },
  { team: "philippines", name: "Janet Kang", school: "UCSB", year: 3, photo: "/images/testimonies/philippines/janet-kang.jpg" },
  { team: "philippines", name: "Joshua Han", school: "UCSD", year: 4, photo: "/images/testimonies/philippines/joshua-han.jpg" },
  { team: "philippines", name: "Joshua Tsai", school: "UCR", year: 1, photo: "/images/testimonies/philippines/joshua-tsai.jpg" },
  { team: "philippines", name: "Justin Ok", school: "UCI", year: 2, photo: "/images/testimonies/philippines/justin-ok.jpg" },
  { team: "philippines", name: "Kendall Hwang", school: "UCSD", year: 1, photo: "/images/testimonies/philippines/kendall-hwang.jpg" },
  { team: "philippines", name: "Noah Kimm", school: "UCR", year: 2, photo: "/images/testimonies/philippines/noah-kimm.jpg" },
  { team: "philippines", name: "Ryan Kim", school: "UCI", year: 1, photo: "/images/testimonies/philippines/ryan-kim.jpg" },
  { team: "philippines", name: "Sarah Choi", school: "UCSD", year: 2, photo: "/images/testimonies/philippines/sarah-choi.jpg" },
  { team: "philippines", name: "Summer Hahn", school: "Pepperdine", year: 4, photo: "/images/testimonies/philippines/summer-hahn.jpg" },

  // ── North India (13 + 2 leaders) ──
  { team: "north-india", name: "Chris Kim", role: "Leader", photo: "/images/testimonies/north-india/chris-kim.jpg" },
  { team: "north-india", name: "Sonia Lim", role: "Co-leader", photo: "/images/testimonies/north-india/sonia-lim.jpg" },
  { team: "north-india", name: "Ben Chan", school: "UCSB", year: 1, photo: "/images/testimonies/north-india/ben-chan.jpg" },
  { team: "north-india", name: "Caleb Kim", school: "UCLA", year: 4, photo: "/images/testimonies/north-india/caleb-kim.jpg" },
  { team: "north-india", name: "Daniel Park", school: "UCI", year: 3, photo: "/images/testimonies/north-india/daniel-park.jpg" },
  { team: "north-india", name: "Eunice Lee", school: "UCR", year: 2, photo: "/images/testimonies/north-india/eunice-lee.jpg" },
  { team: "north-india", name: "Janelle Roh", school: "UCR", year: 1, photo: "/images/testimonies/north-india/janelle-roh.jpg" },
  { team: "north-india", name: "Joanne Park", school: "UCLA", year: 1, photo: "/images/testimonies/north-india/joanne-park.jpg" },
  { team: "north-india", name: "Joseph Song", school: "UCSD", year: 3, photo: "/images/testimonies/north-india/joseph-song.jpg" },
  { team: "north-india", name: "Naomi Pak", school: "Biola", year: 1, photo: "/images/testimonies/north-india/naomi-pak.jpg" },
  { team: "north-india", name: "Nathan Noh", school: "UCI", year: 1, photo: "/images/testimonies/north-india/nathan-noh.jpg" },
  { team: "north-india", name: "Noah Lee", school: "UCR", year: 1, photo: "/images/testimonies/north-india/noah-lee.jpg" },
  { team: "north-india", name: "Roy Kim", school: "UCR", year: 4, photo: "/images/testimonies/north-india/roy-kim.jpg" },
  { team: "north-india", name: "Sarah Lee", school: "UCR", year: 4, photo: "/images/testimonies/north-india/sarah-lee.jpg" },
  { team: "north-india", name: "Song Yi Baik", school: "UCLA", year: 4, photo: "/images/testimonies/north-india/song-yi-baik.jpg" },

  // ── Nicaragua (17 + 2 leaders) ──
  { team: "nicaragua", name: "Anna Pellegrini", role: "Leader", photo: "/images/testimonies/nicaragua/anna-pellegrini.jpg" },
  { team: "nicaragua", name: "Sam Ham", role: "Co-leader", photo: "/images/testimonies/nicaragua/sam-ham.jpg" },
  { team: "nicaragua", name: "Amber Khe", school: "UCSD", year: 2, photo: "/images/testimonies/nicaragua/amber-khe.jpg" },
  { team: "nicaragua", name: "Ashley Kim", school: "UCLA", year: 2, photo: "/images/testimonies/nicaragua/ashley-kim.jpg" },
  { team: "nicaragua", name: "Dylan Lee", school: "UCI", year: 3, photo: "/images/testimonies/nicaragua/dylan-lee.jpg" },
  { team: "nicaragua", name: "Emily Oh", school: "UCI", year: 4, photo: "/images/testimonies/nicaragua/emily-oh.jpg" },
  { team: "nicaragua", name: "Flora Ka", school: "UCI", year: 2, photo: "/images/testimonies/nicaragua/flora-ka.jpg" },
  { team: "nicaragua", name: "Irene Park", school: "Pepperdine", year: 1, photo: "/images/testimonies/nicaragua/irene-park.jpg" },
  { team: "nicaragua", name: "Joshua Park", school: "UCLA", year: 4, photo: "/images/testimonies/nicaragua/joshua-park.jpg" },
  { team: "nicaragua", name: "Kate Lee", school: "UCLA", year: 1, photo: "/images/testimonies/nicaragua/kate-lee.jpg" },
  { team: "nicaragua", name: "Kevin Chung", school: "UCR", year: 1, photo: "/images/testimonies/nicaragua/kevin-chung.jpg" },
  { team: "nicaragua", name: "Kevin Kim", school: "UCLA", year: 1, photo: "/images/testimonies/nicaragua/kevin-kim.jpg" },
  { team: "nicaragua", name: "Lucas Cho", school: "UCLA", year: 1, photo: "/images/testimonies/nicaragua/lucas-cho.jpg" },
  { team: "nicaragua", name: "Matthew Hyun", school: "Pepperdine", year: 1, photo: "/images/testimonies/nicaragua/matthew-hyun.jpg" },
  { team: "nicaragua", name: "Michael Hwang", school: "UCR", year: 1, photo: "/images/testimonies/nicaragua/michael-hwang.jpg" },
  { team: "nicaragua", name: "Paul Song", school: "UCI", year: 4, photo: "/images/testimonies/nicaragua/paul-song.jpg" },
  { team: "nicaragua", name: "Sarah Lim", school: "UCR", year: 1, photo: "/images/testimonies/nicaragua/sarah-lim.jpg" },
  { team: "nicaragua", name: "Seth Lo", school: "Biola", year: 2, photo: "/images/testimonies/nicaragua/seth-lo.jpg" },
  { team: "nicaragua", name: "SuhJoon Ian Kang", school: "USC", year: 2, photo: "/images/testimonies/nicaragua/suhjoon-ian-kang.jpg" },

  // ── Taiwan (12 + 2 leaders) ──
  { team: "taiwan", name: "Andrew Yoo", role: "Leader", photo: "/images/testimonies/taiwan/andrew-yoo.jpg" },
  { team: "taiwan", name: "Keren Choi", role: "Co-leader", photo: "/images/testimonies/taiwan/keren-choi.jpg" },
  { team: "taiwan", name: "Andrew Back", school: "UCSD", year: 1, photo: "/images/testimonies/taiwan/andrew-back.jpg" },
  { team: "taiwan", name: "Caleb Su", school: "Biola", year: 4, photo: "/images/testimonies/taiwan/caleb-su.jpg" },
  { team: "taiwan", name: "Esther Yang", school: "UCLA", year: 4, photo: "/images/testimonies/taiwan/esther-yang.jpg" },
  { team: "taiwan", name: "Grace Yoon", school: "UCI", year: 1, photo: "/images/testimonies/taiwan/grace-yoon.jpg" },
  { team: "taiwan", name: "Irene Song", school: "UCSB", year: 2, photo: "/images/testimonies/taiwan/irene-song.jpg" },
  { team: "taiwan", name: "Jane Kim", school: "UCSD", year: 3, photo: "/images/testimonies/taiwan/jane-kim.jpg" },
  { team: "taiwan", name: "Janet Phee", school: "UCSB", year: 1, photo: "/images/testimonies/taiwan/janet-phee.jpg" },
  { team: "taiwan", name: "Jean Kim", school: "UCI", year: 3, photo: "/images/testimonies/taiwan/jean-kim.jpg" },
  { team: "taiwan", name: "Owen Lee", school: "USC", year: 1, photo: "/images/testimonies/taiwan/owen-lee.jpg" },
  { team: "taiwan", name: "Rebecca Park", school: "UCR", year: 3, photo: "/images/testimonies/taiwan/rebecca-park.jpg" },
  { team: "taiwan", name: "Rubin Jang", school: "UCR", year: 1, photo: "/images/testimonies/taiwan/rubin-jang.jpg" },
  { team: "taiwan", name: "Samantha Taing", school: "UCR", year: 2, photo: "/images/testimonies/taiwan/samantha-taing.jpg" },
];
