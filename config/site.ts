export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Umar | Full Stack Developer",
  description: "Umar's Portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Work",
      href: "/work",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/meumar",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    linkedin: "https://www.linkedin.com/in/umar-sheik-2725b91b8",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

export const experienceData = [
  {
    year: "Nov 2020 - Jan 2021",
    title: "Frontend Intern",
    company: "Orotron",
    summary:
      "Gained web development skills (REST concepts, debugging, GitLab) through hands-on projects at a startup.",
  },
  {
    year: "Jun 2021 - Nov 2023",
    title: "Software Engineer",
    company: "Halmark Global Technologies",
    summary:
      "Built core functionalities for e-signature app using Vue.js, Node.js, and MongoDB (PDF editing, data management, secure APIs, custom UI). Now migrating to a low-code platform for efficiency.",
  },
  {
    year: "Dec 2023 - Present",
    title: "Technical Lead",
    company: "Halmark Global Technologies",
    summary:
      "Promoted for leadership, leading development teams to deliver exceptional results.",
  },
];

export const projects = [
  {
    title: "Electronic signature",
    content:
      "Digital signature platform with reusable templates, quick send with contacts, filled data storage, etc. Developed most of the core part. ",
    languages: [
      {
        title: "Vue JS",
        rating: 4,
      },
      {
        title: "Node JS",
        rating: 6,
      },
      {
        title: "MongoDB",
        rating: 4,
      },
    ],
    link: "https://esigns.io",
  },
  {
    title: "Low code platform",
    content:
      "Low code platform that use to create web applications without writing a single line of code. ",
    languages: [
      {
        title: "Vue JS",
        rating: 4,
      },
      {
        title: "Node JS",
        rating: 6,
      },
      {
        title: "MongoDB",
        rating: 4,
      },
    ],
    link: "https://kodefast.com",
  },
];
