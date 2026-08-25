export interface MissionTeam {
  slug: string;
  country: string;
  region: string;
  cover: string;
  gallery: string[];
}

const g = (f: string) => `/images/missions/${f}`;

export const missionsIntro = {
  verse: "Go therefore and make disciples of all nations",
  reference: "Matthew 28:19",
  heading: "Our Missions Program",
  body: "KCM aims to support and send collegians to various countries to partake in the Great Commission. Every year, KCM sends multiple teams to support missionaries and their ministries in varying locations within their respective countries.",
  hashtag: "#go",
  season: "STSM 2026",
  hero: g("hike.jpg"),
};

// Short-Term Summer Missions — 2026 teams (order matches the "2026 STSM Teams" board).
export const teams: MissionTeam[] = [
  {
    slug: "cambodia",
    country: "Cambodia",
    region: "Southeast Asia",
    cover: g("cambodia.jpg"),
    gallery: [],
  },
  {
    slug: "south-india",
    country: "South India",
    region: "South Asia",
    cover: g("sindia.jpg"),
    gallery: [],
  },
  {
    slug: "philippines",
    country: "Philippines",
    region: "Southeast Asia",
    cover: g("philippines.jpg"),
    gallery: [],
  },
  {
    slug: "north-india",
    country: "North India",
    region: "South Asia",
    cover: g("nindia.jpg"),
    gallery: [],
  },
  {
    slug: "nicaragua",
    country: "Nicaragua",
    region: "Central America",
    cover: g("nicaragua.jpg"),
    gallery: [],
  },
  {
    slug: "taiwan",
    country: "Taiwan",
    region: "East Asia",
    cover: g("taiwan.jpg"),
    gallery: [],
  },
];
