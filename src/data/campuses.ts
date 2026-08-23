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
      { name: "Ashley Kim", role: "President", photo: img("ashley-kim-president.jpg") },
      { name: "Janet Kang", role: "Praise", photo: img("janet-kang-praise.jpg") },
      { name: "Noah Kim", role: "Missions", photo: img("noah-kim-missions.jpg") },
      { name: "Timothy Joo", role: "Inreach / Media", photo: img("timothy-joo-inreach-media.jpg") },
      { name: "Joyce Jung", role: "Prayer", photo: img("joyce-jung-prayer.jpg") },
      { name: "Lydia Kim", role: "Small Group", photo: img("lydia-kim-small-groups.jpg") },
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
      { name: "Ray Li", role: "President", photo: img("ray-li-president.jpg") },
      { name: "Sarah Shin", role: "Praise / Prayer", photo: img("img-1333.jpg") },
      { name: "Sonia Lim", role: "Missions", photo: img("sonia-lim-missions.jpg") },
      { name: "Joe Song", role: "Outreach", photo: img("joe-song-outreach.jpg") },
      { name: "Josh Lau", role: "Inreach", photo: img("josh-lau-inreach.jpg") },
      { name: "Hailey Lee", role: "Small Group (Girls)", photo: img("hailey-lee-girls-small-group.jpg") },
      { name: "Nate Cho", role: "Small Group (Boys)", photo: img("nate-cho-boys-small-group.jpg") },
      { name: "Ilynn Joo", role: "Media", photo: img("ilynn-joo-vam.jpg") },
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
      { name: "Teddy Yang", role: "President", photo: img("teddy-yang-president.jpg") },
      { name: "Agnes Kwon", role: "Praise", photo: img("agnes-kwon-praise.jpg") },
      { name: "Matthew Baek", role: "Missions", photo: img("matthew-baek-missions.jpg") },
      { name: "Christine Shin", role: "Prayer", photo: img("christine-shin-prayer.jpg") },
      { name: "Esther Kim", role: "Outreach", photo: img("esther-kim-outreach.jpg") },
      { name: "Yuna Ham", role: "Inreach", photo: img("yuna-ham-inreach.jpg") },
      { name: "Rachel Son", role: "Small Group (Girls)", photo: img("rachel-son-sg-girl.jpg") },
      { name: "Kyle Woo", role: "Small Group (Boys)", photo: img("kyle-woo-sg-boys.jpg") },
      { name: "Susie Park", role: "Media", photo: img("susie-park-vam.jpg") },
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
      { name: "Caleb Kim", role: "President", photo: img("caleb-kim-president-fa.jpg") },
      { name: "Daniel Song", role: "Praise", photo: img("daniel-song-praise.jpg") },
      { name: "Lois Pak", role: "Missions", photo: img("lois-pak-missions.jpg") },
      { name: "Izzy Chen", role: "Inreach", photo: img("izzy-chen-inreach.jpg") },
      { name: "Jonathan Chun", role: "Outreach", photo: img("dsc01483.jpg") },
      { name: "Olivia Hyun", role: "Prayer", photo: img("olivia-hyun-prayer.jpg") },
      { name: "Songyi Baik", role: "Small Group (Girls)", photo: img("songyi-baik-small-group.jpg") },
      { name: "Joseph Hyung", role: "Small Group (Boys)", photo: img("joseph-hyung-small-group.jpg") },
      { name: "Anna Kim", role: "Media", photo: img("anna-kim-vam.jpg") },
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
      { name: "Paul Song", role: "President", photo: img("paul-song-president.jpg") },
      { name: "Cadyn Ju", role: "Praise", photo: img("cadyn-ju-praise-core.jpg") },
      { name: "Sarang Min", role: "Missions", photo: img("sarang-min-missions-core.jpg") },
      { name: "Elizabeth Kim", role: "Inreach", photo: img("elizabeth-kim-inreach-core.jpg") },
      { name: "Yuna Choi", role: "Outreach", photo: img("yuna-choi-outreach-core.jpg") },
      { name: "Elise Hong", role: "Prayer", photo: img("elise-hong-prayer-core.jpg") },
      { name: "Elliott Lee", role: "Small Group (Boys)", photo: img("elliott-lee-small-groups-core.jpg") },
      { name: "Janice Ji", role: "Small Group (Girls)", photo: img("janice-ji-small-groups-core.jpg") },
      { name: "David Nam", role: "Media", photo: img("david-nam-vam-core.jpg") },
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
      { name: "Andrew Choi", role: "President", photo: img("andrew-choi-president.jpg") },
      { name: "Justin Lee", role: "Missions / Prayer", photo: img("justin-lee-missions-prayercore.jpg") },
      { name: "Eriana Song", role: "Inreach", photo: img("eriana-song-inreachcore.jpg") },
      { name: "Vincent Salido", role: "Outreach", photo: img("vincent-salido-outreachcore.jpg") },
      { name: "Hannah Chai", role: "Small Group", photo: img("hannah-chai-smallgroupcore.jpg") },
      { name: "Augie Nguyen", role: "Media", photo: img("augie-nguyen-vamcore.jpg") },
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
      { name: "Jason Kim", role: "President", photo: img("jason-kim-president.jpg") },
      { name: "Katelyn Park", role: "Praise", photo: img("katelyn-park-praise.jpg") },
      { name: "Kylie Chung", role: "Missions", photo: img("kylie-chung-missions.jpg") },
      { name: "Joshua Chung", role: "Inreach", photo: img("joshua-chung-inreach.jpg") },
      { name: "Daniel Lee", role: "Outreach", photo: img("daniel-lee-outreach.jpg") },
      { name: "Elizabeth Do", role: "Small Group (Girls)", photo: img("dscf7605.jpg") },
      { name: "Joshua Han", role: "Small Group (Boys)", photo: img("joshua-han-sg-boys.jpg") },
      { name: "Jane Kim", role: "Prayer", photo: img("jane-kim-prayer.jpg") },
      { name: "Sion Lee", role: "Media", photo: img("sion-lee-vam.jpg") },
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
      { name: "Irene Kim", role: "President", photo: img("irene-kim-president-2.jpg") },
      { name: "Boaz Choi", role: "Praise", photo: img("boaz-choi-praise-2.jpg") },
      { name: "Josh Lee", role: "Missions", photo: img("josh-lee-missions-2.jpg") },
      { name: "Joyce Choi", role: "Inreach", photo: img("joyce-choi-inreach-2.jpg") },
      { name: "Skylar Lee", role: "Outreach", photo: img("skylar-lee-outreach-2.jpg") },
      { name: "Ryan Noh", role: "Prayer", photo: img("ryan-noh-prayer-2.jpg") },
      { name: "Daniel Kim", role: "Small Group (Boys)", photo: img("daniel-kim-small-group-boys-2.jpg") },
      { name: "Joyce Yu", role: "Small Group (Girls)", photo: img("joyce-yu-small-group-girls-2.jpg") },
      { name: "Moses Gang", role: "Media", photo: img("moses-gang-vam-2.jpg") },
    ],
  },
];
