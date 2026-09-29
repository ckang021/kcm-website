export interface Core {
  name: string;
  role: string;
  photo: string;
}

export interface Campus {
  slug: string;
  name: string;
  full: string;
  city: string;
  group: string;
  instagram: string;
  facebook?: string;
  cores: Core[];
}

const img = (f: string) => `/images/campuses/${f}`;
const core = (f: string) => `/images/cores/${f}`;

export const campuses: Campus[] = [
  {
    slug: "ucsb",
    name: "UCSB",
    full: "UC Santa Barbara",
    city: "Santa Barbara",
    group: img("ucsb-group.jpg"),
    instagram: "https://www.instagram.com/sbkcm/",
    facebook: "https://www.facebook.com/groups/sbkcm",
    cores: [
      { name: "Janet Kang", role: "President", photo: core("ucsb/janet-kang-president.jpg") },
      { name: "Yechan Lee", role: "Praise", photo: core("ucsb/yechan-lee-praise.jpg") },
      { name: "Irene Song", role: "Missions", photo: core("ucsb/irene-song-missions.jpg") },
      { name: "Amanda Lee", role: "Inreach / Media", photo: core("ucsb/amanda-lee-inreach-media.jpg") },
      { name: "Emily Doh", role: "Outreach", photo: core("ucsb/emily-doh-outreach.jpg") },
      { name: "Daniel Lee", role: "Prayer", photo: core("ucsb/daniel-lee-prayer.jpg") },
      { name: "Heavin Shim", role: "Accountability", photo: core("ucsb/heavin-shim-accountability.jpg") },
    ],
  },
  {
    slug: "pepperdine",
    name: "Pepperdine",
    full: "Pepperdine University",
    city: "Malibu",
    group: img("pepp-wintercon.jpg"),
    instagram: "https://www.instagram.com/pepperdinekcm/",
    cores: [
      { name: "Grace Lee-Delgado", role: "President", photo: core("pepperdine/grace-lee-delgado-president.jpg") },
      { name: "Hayden Chow", role: "Praise", photo: core("pepperdine/hayden-chow-praise.jpg") },
      { name: "Janice Park", role: "Missions", photo: core("pepperdine/janice-park-missions.jpg") },
      { name: "Noah Lam", role: "Inreach / Outreach", photo: core("pepperdine/noah-lam-inreach-outreach.jpg") },
      { name: "Hadassah Byamukama", role: "Prayer", photo: core("pepperdine/hadassah-byamukama-prayer.jpg") },
      { name: "Ted Kesoglou", role: "Small Group (Boys)", photo: core("pepperdine/ted-kesoglou-small-group-boys.jpg") },
      { name: "Amber Han", role: "Small Group (Girls)", photo: core("pepperdine/amber-han-small-group-girls.jpg") },
      { name: "Kayleen Kim", role: "Media", photo: core("pepperdine/kayleen-kim-media.jpg") },
    ],
  },
  {
    slug: "usc",
    name: "USC",
    full: "University of Southern California",
    city: "Los Angeles",
    group: img("usc-group.jpg"),
    instagram: "https://www.instagram.com/usckcm/",
    facebook: "https://www.facebook.com/usckcm",
    cores: [
      { name: "Teddy Yang", role: "President", photo: core("usc/theodore-yang-president.jpg") },
      { name: "Jeremiah Jun", role: "Praise", photo: core("usc/jeremiah-jun-praise.jpg") },
      { name: "Matthew Baek", role: "Missions", photo: core("usc/matthew-baek-missions.jpg") },
      { name: "Kaylee Won", role: "Inreach", photo: core("usc/kaylee-won-inreach.jpg") },
      { name: "Esther Kim", role: "Outreach", photo: core("usc/esther-kim-outreach.jpg") },
      { name: "Rachel Son", role: "Prayer", photo: core("usc/rachel-son-prayer.jpg") },
      { name: "Nathaniel Kim", role: "Small Group (Boys)", photo: core("usc/nathaniel-kim-small-group-boys.jpg") },
      { name: "Yeonho Jeong", role: "Small Group (Girls)", photo: core("usc/yeonho-jeong-small-group-girls.jpg") },
      { name: "Susie Park", role: "Media", photo: core("usc/susie-park-media.jpg") },
    ],
  },
  {
    slug: "ucla",
    name: "UCLA",
    full: "UC Los Angeles",
    city: "Los Angeles",
    group: img("ucla-group.jpg"),
    instagram: "https://www.instagram.com/uclakcm/",
    cores: [
      { name: "Olivia Hyun", role: "President", photo: core("ucla/olivia-hyun-president.jpg") },
      { name: "Ethan Kim", role: "Praise", photo: core("ucla/ethan-kim-praise.jpg") },
      { name: "Ashley Kim", role: "Missions", photo: core("ucla/ashley-kim-missions.jpg") },
      { name: "Karen Lee", role: "Inreach", photo: core("ucla/karen-lee-inreach.jpg") },
      { name: "Joy Shin", role: "Outreach", photo: core("ucla/joy-shin-outreach.jpg") },
      { name: "Sammi Chung", role: "Prayer", photo: core("ucla/sammi-chung-prayer.jpg") },
      { name: "Jin Lee", role: "Small Group (Boys)", photo: core("ucla/jin-lee-small-group.jpg") },
      { name: "Angeline Choi", role: "Small Group (Girls)", photo: core("ucla/angeline-choi-small-group.jpg") },
      { name: "Emma Kim", role: "Media", photo: core("ucla/emma-kim-media.jpg") },
      { name: "Alice Lee", role: "Freshman Accountability", photo: core("ucla/alice-lee-fa.jpg") },
    ],
  },
  {
    slug: "uci",
    name: "UCI",
    full: "UC Irvine",
    city: "Irvine",
    group: img("uci-group.jpg"),
    instagram: "https://www.instagram.com/ucikcm/",
    cores: [
      { name: "Elizabeth Kim", role: "President", photo: core("uci/elizabeth-kim-president.jpg") },
      { name: "Daniel Park", role: "Praise", photo: core("uci/daniel-park-praise.jpg") },
      { name: "Sarang Min", role: "Missions", photo: core("uci/sarang-min-missions.jpg") },
      { name: "Elliott Lee", role: "Inreach", photo: core("uci/elliott-lee-inreach.jpg") },
      { name: "Karen Kim", role: "Outreach", photo: core("uci/karen-kim-outreach.jpg") },
      { name: "Jean Kim", role: "Prayer", photo: core("uci/jean-kim-prayer.jpg") },
      { name: "Cadyn Ju", role: "Accountability", photo: core("uci/cadyn-ju-accountability.jpg") },
      { name: "David Nam", role: "Accountability", photo: core("uci/david-nam-accountability.jpg") },
      { name: "Yejin Park", role: "Media", photo: core("uci/yejin-park-media.jpg") },
    ],
  },
  {
    slug: "biola",
    name: "Biola",
    full: "Biola University",
    city: "La Mirada",
    group: img("biola-group.jpg"),
    instagram: "https://www.instagram.com/biolakcm/",
    cores: [
      { name: "Hannah Chai", role: "President", photo: core("biola/hannah-chai-president.jpg") },
      { name: "Vincent Salido", role: "Missions", photo: core("biola/vincent-salido-missions.jpg") },
      { name: "Paul Yoo", role: "Inreach", photo: core("biola/paul-yoo-inreach.jpg") },
      { name: "Kaitlyn Wong", role: "Outreach", photo: core("biola/kaitlyn-wong-outreach.jpg") },
      { name: "Hyeri Choi", role: "Small Group", photo: core("biola/hyeri-choi-small-group.jpg") },
    ],
  },
  {
    slug: "ucsd",
    name: "UCSD",
    full: "UC San Diego",
    city: "San Diego",
    group: img("sd-group.jpg"),
    instagram: "https://www.instagram.com/sd.kcm/",
    facebook: "https://www.facebook.com/groups/sdkcmgroup/",
    cores: [
      { name: "Katelyn Park", role: "President", photo: core("ucsd/katelyn-park-president.jpg") },
      { name: "Faith Park", role: "Praise", photo: core("ucsd/faith-park-praise.jpg") },
      { name: "Gina Bang", role: "Missions", photo: core("ucsd/gina-bang-missions.jpg") },
      { name: "Joseph Kim", role: "Inreach", photo: core("ucsd/joseph-kim-inreach.jpg") },
      { name: "Ethan Chi", role: "Outreach", photo: core("ucsd/ethan-chi-outreach.jpg") },
      { name: "Joseph Song", role: "Prayer", photo: core("ucsd/joseph-song-prayer.jpg") },
      { name: "Joshua Chun", role: "Small Group (Boys)", photo: core("ucsd/joshua-chun-small-group-boys.jpg") },
      { name: "Jane Kim", role: "Small Group (Girls)", photo: core("ucsd/jane-kim-small-group-girls.jpg") },
      { name: "Siah Lee", role: "Media", photo: core("ucsd/siah-lee-media.jpg") },
    ],
  },
  {
    slug: "ucr",
    name: "UCR",
    full: "UC Riverside",
    city: "Riverside",
    group: img("ucr-group.jpg"),
    instagram: "https://www.instagram.com/riversidekcm/",
    cores: [
      { name: "Joyce Choi", role: "President", photo: core("ucr/joyce-choi-president.jpg") },
      { name: "Ian Huang", role: "Praise", photo: core("ucr/ian-huang-praise.jpg") },
      { name: "Tyler Kim", role: "Missions", photo: core("ucr/tyler-kim-missions.jpg") },
      { name: "Samantha Taing", role: "Inreach", photo: core("ucr/samantha-taing-inreach.jpg") },
      { name: "Eunice Lee", role: "Outreach", photo: core("ucr/eunice-lee-outreach.jpg") },
      { name: "Caleb Lim", role: "Prayer", photo: core("ucr/caleb-lim-prayer.jpg") },
      { name: "Caleb Huh", role: "Small Group (Boys)", photo: core("ucr/caleb-huh-small-group-boys.jpg") },
      { name: "Lexi Lee", role: "Small Group (Girls)", photo: core("ucr/lexi-lee-small-group-girls.jpg") },
    ],
  },
];
