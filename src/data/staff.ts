export interface StaffMember {
  name: string;
  role: string;
  photo: string;
  /** Committee mission statement, shown under the member on the Staff page. */
  mission?: string;
}

const img = (f: string) => `/images/staff/${f}`;

export const steeringCore: StaffMember[] = [
  { name: "Jeesu Park", role: "Director", photo: img("jeesu-park.jpg") },
  {
    name: "Chris Kim",
    role: "Associate Director / Core Care",
    photo: img("chris-kim.jpg"),
    mission:
      "This committee exists to encourage and mentor student core leaders through accountability, events, care groups, etc.",
  },
  {
    name: "Anna Pellegrini",
    role: "Missions Director",
    photo: img("anna-pellegrini.jpg"),
    mission: "This committee exists to plan and oversee KCM's STSM program.",
  },
  {
    name: "Ashlyn Hahn",
    role: "GRN / MRN",
    photo: img("ashlyn-hahn.jpg"),
    mission:
      "This committee exists to plan and execute two major federal events that focus on introducing KCM to all students and promote Short-Term Summer Missions.",
  },
  {
    name: "Janette Park",
    role: "Associate Missions Director",
    photo: img("janette-park.jpg"),
    mission: "This committee exists to plan and oversee KCM's STSM program.",
  },
  {
    name: "Ryan Moon",
    role: "Sports",
    photo: img("ryan-moon.jpg"),
    mission:
      "This committee exists to promote campus outreach through sports to create opportunities for cross-campus, Christ-centered fellowship.",
  },
  {
    name: "Chris Kang",
    role: "Wintercon",
    photo: img("chris-kang.jpg"),
    mission:
      "This committee exists to promote cross-campus fellowship through our annual Winter Conference and to encourage students to go on summer missions.",
  },
];

export const staffGroups = [
  {
    title: "Steering Core",
    body: "Steering Core leads all of KCM on a federal level. They plan alongside campus cores and KCM staff to mobilize and push all the federal events held throughout the year.",
  },
  {
    title: "Campus Staff",
    body: "Campus Staff aims to support the campuses on a campus level and also support the cores at their respective assigned campuses.",
  },
  {
    title: "Federal Staff",
    body: "Federal Staff aims to support KCM as a whole by serving to mobilize and run all federal events held throughout the year.",
  },
];

export const staffPhoto = "/images/staff/1-5.jpg";
