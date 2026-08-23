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
  season: "STSM 2025",
  hero: g("hike.jpg"),
};

// Short-Term Summer Missions — 2025 teams (order matches the live "2025 STSM Teams" board).
export const teams: MissionTeam[] = [
  {
    slug: "cambodia",
    country: "Cambodia",
    region: "Southeast Asia",
    cover: g("cambodia.jpg"),
    gallery: [
      "img-4550-cr2.jpg", "img-5263.jpg", "img-5318.jpg", "img-5424-cr2.jpg",
      "img-5484-cr2.jpg", "img-6794-cr2.jpg", "img-7764-cr2.jpg", "img-7778-cr2.jpg",
      "img-8077-cr2.jpg", "goats.jpg",
    ].map(g),
  },
  {
    slug: "south-india",
    country: "South India",
    region: "South Asia",
    cover: g("sindia.jpg"),
    gallery: [
      "cnb-5734.jpg", "cnb-5970.jpg", "cnb-6109.jpg", "cnb-6536.jpg", "cnb-6834.jpg",
      "cnb-6839.jpg", "img-4944.jpg", "img-5008.jpg", "cnb-6217.jpg",
    ].map(g),
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
    gallery: [
      "1-2.jpg", "1-3.jpg", "1-4.jpg", "1-6.jpg", "1-7.jpg", "1-8.jpg", "1.jpg", "t.jpg", "r.jpg",
    ].map(g),
  },
  {
    slug: "nicaragua",
    country: "Nicaragua",
    region: "Central America",
    cover: g("nicaragua.jpg"),
    gallery: [
      "dscf6665.jpg", "dscf6713.jpg", "dscf6717.jpg", "img-0167.jpg", "img-1098.jpg",
      "img-1148.jpg", "img-9016.jpg", "img-9686.jpg", "img-9737.jpg", "cnb-6338.jpg",
    ].map(g),
  },
  {
    slug: "taiwan",
    country: "Taiwan",
    region: "East Asia",
    cover: g("taiwan.jpg"),
    gallery: [
      "1fgm0164.jpg", "1fgm0188.jpg", "1fgm0201.jpg", "1fgm0299.jpg", "1fgm0302.jpg",
      "1fgm0380.jpg", "1fgm0405.jpg", "1fgm0528.jpg", "1fgm0541.jpg", "p1055402.jpg",
    ].map(g),
  },
];
