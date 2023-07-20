import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Web Instructor",
    icon: backend,
  },
  {
    title: "Embedded Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Guard Enforcement",
    jobType: "Remote",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining website, ensuring optimal functionality and user experience.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Devcent",
    jobType: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2022 - July 2023",
    points: [
      "Developed and maintaining web applications using React.js and other related technologies resulting in a remarkable 30% increase in website performance.",
      "Implemented robust back-end solutions using NodeJS, and MongoDB to enable seamless data management.",
      "Collaborated with cross-functional teams to seamlessly convert design mockups into fully functional websites and applications.",
      "Conducted comprehensive web development training sessions.",
    ],
  },
  {
    title: "IT Professional",
    company_name: "Gateway ICT",
    jobType: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2021 - Aug 2022",
    points: [
      "Maintained website for optimal functionality and user experience.",
      "Recommended network security standards and upgrades to management",
    ],
  },
  {
    title: "Embedded Programmer",
    company_name: "Shelter Electronics",
    jobType: "Part time",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2018 - May 2021",
    points: [
      "Engineered software components for automation hardware, specializing in microcontrollers and sensors.",
      "Developed embedded system solutions using Arduino platform to enable seamless automation and control.",
      "Optimized code by identifying and replacing problematic functions with efficient and optimized content.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Joseph developed a dynamic website that perfectly showcases our services and improves user experience. ",
    name: "Adekola Joseph",
    designation: "CEO",
    company: "Ex-Nihilo",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Joseph does.",
    name: "Abimbola",
    designation: "CW",
    company: "Didomi",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Joseph's ability to understand unique requirements and deliver tailored solutions is truly commendable.",
    name: "Daniel Noble",
    designation: "Manager",
    company: "Prompay",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Devcent",
    description:
      "An innovative online learning platform designed to equip learners with in-demand tech skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    project_link: "https://devcent.net",
    source_code_link: "https://github.com/",
  },
  {
    name: "Linear App",
    description:
      "Meet the new standard for modern software development. Streamline Issues, sprint and product roadmaps.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    project_link: "https://linear.app",
    source_code_link: "https://github.com/",
  },
  {
    name: "Todoist",
    description:
      "Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    project_link: "https://todoist.com",
    source_code_link: "https://github.com",
  },
  {
    name: "Prompay",
    description:
      "Prompay is an online platform that lets you earn money while you learn! Experience the joy of answering questions to earn.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    project_link: "https://theprompay.com",
    source_code_link: "https://github.com/",
  },
  {
    name: "Ex-Nihilo Care Services",
    description:
      "The easiest and friendly path to securing your study abroad. Ex-Nihilo can help you secure international education.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    project_link: "https://ex-nihilocareservicesandconsultancy.com",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
