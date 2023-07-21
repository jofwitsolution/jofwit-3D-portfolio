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
  threejs,
  devcent,
  linear_app,
  todoist,
  prompay,
  ex_nihilo,
  best_game_house,
  portfolio,
  jofwit_solution,
  didomi,
  globalflex,
  bpl,
  devcent_logo,
  shelter,
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
    icon: web,
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
    icon: devcent_logo,
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
    icon: web,
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
    icon: shelter,
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
    image: devcent,
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
    image: linear_app,
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
    image: todoist,
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
    image: prompay,
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
    image: ex_nihilo,
    project_link: "https://ex-nihilocareservicesandconsultancy.com",
    source_code_link: "https://github.com/",
  },
  {
    name: "Rawg clone",
    description:
      "Best Game House Best Game House Best Game House Best Game House Best Game House Best Game House Best Game House",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra ui",
        color: "pink-text-gradient",
      },
    ],
    image: best_game_house,
    project_link: "https://bestgamehouse.vercel.app",
    source_code_link: "https://github.com/",
  },
  {
    name: "Former Portfolio",
    description:
      "My former Portfolio website. Built with Nextjs 13.4, Tailwind CSS. My former Portfolio website. Built with Nextjs Tailwind CSS.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    project_link: "https://jofwitportfolio.vercel.app",
    source_code_link: "https://github.com/",
  },
  {
    name: "Jofwit Solution",
    description:
      "An IT agency focused on web. Empowering Your Business with Expert IT Solutions and Services.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
    ],
    image: jofwit_solution,
    project_link: "https://jofwitsolution.com",
    source_code_link: "https://github.com/",
  },
  {
    name: "Didomi Ltd",
    description:
      "Didomi Company Limited, One of the leading international education providers. One of the leading international education providers.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
    ],
    image: didomi,
    project_link: "https://didomiconsortium.com",
    source_code_link: "https://github.com/",
  },
  {
    name: "Globalflex",
    description:
      "Your One-Stop Shop for Everything You Need. Your One-Stop E-commerce for Everything You Need.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: globalflex,
    project_link: "https://globalflexshopping.store",
    source_code_link: "https://github.com/",
  },
  {
    name: "Better Place Living",
    description:
      "Better Place Living is a United Kingdom based health care agency that provides care and support to those in need.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: bpl,
    project_link: "https://betterplaceliving.co.uk",
    source_code_link: "https://github.com/",
  },
  {
    name: "Guard Enforcement",
    description:
      "Guard Enforcement Security and Patrol. A security company based in the United State of America and Nigeria.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: bpl,
    project_link: "https://guardenfocement.netlify.app",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
