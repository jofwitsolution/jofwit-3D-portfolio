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
  aws,
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
  bibzycarter,
  best_game_house,
  portfolio,
  jofwit_solution,
  didomi,
  globalflex,
  bpl,
  devcent_logo,
  shelter,
  arduino,
  python,
  nextjs,
  sass,
  chakra_ui,
  guard_enforcement,
  human,
  prompay_ceo,
  provision,
  dieselng,
  easeman_cleaning,
  easeman_courses,
  pidng,
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
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
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
    title: "Backend Developer",
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "SASS",
    icon: sass,
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
    name: "Chakra UI",
    icon: chakra_ui,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Arduino",
    icon: arduino,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Devcent",
    jobType: "",
    icon: devcent_logo,
    iconBg: "#383E56",
    date: "May 2022 - Jan 2025",
    points: [
      "Developed and maintained web applications using React.js and other related technologies resulting in a remarkable 30% increase in website performance.",
      "Implemented robust back-end solutions using NodeJS, and MongoDB to enable seamless data management.",
      "Collaborated with cross-functional teams to seamlessly convert design mockups into fully functional websites and applications.",
      "Improved application performance by implementing caching strategies, load balancing, and optimizing database queries for faster and more efficient systems.",
      " Perform quality assurance/debugging procedures to provide a secure and functional delivery",
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
      "Collaborated with teams to build user interfaces and backend solutions.",
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
    image: human,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Joseph does.",
    name: "Abimbola",
    designation: "CW",
    company: "Didomi",
    image: human,
  },
  {
    testimonial:
      "Joseph's ability to understand unique requirements and deliver tailored solutions is truly commendable.",
    name: "Daniel Noble",
    designation: "Manager",
    company: "Prompay",
    image: prompay_ceo,
  },
];

const projects = [
  {
    name: "Easeman Cleaning",
    description:
      "Easeman Cleaning Services is more than just a cleaning company - they provide services that enhances your quality of life.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: easeman_cleaning,
    project_link: "https://www.easeman.online",
    source_code_link: "https://github.com/",
  },
  {
    name: "Easeman Technology",
    description:
      "Easeman Technology is a tech education center/platform dedicated to providing accessible, enjoyable, and impactful learning experiences.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: easeman_courses,
    project_link: "https://easeman-courses.vercel.app",
    source_code_link: "https://github.com/",
  },
  {
    name: "ProVision Property",
    description:
      "Provsion provide inclusive and supported living experiences tailored to the unique needs of clients in the UK.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: provision,
    project_link: "https://provisionsupportservice.co.uk",
    source_code_link: "https://github.com/",
  },
  {
    name: "Diesel NG",
    description:
      "A go-to source for the most up-to-date diesel (AGO) depot prices in Nigeria. They provide accurate information..",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
    ],
    image: dieselng,
    project_link: "https://www.dieselng.com",
    source_code_link: "https://github.com/",
  },
  {
    name: "AskDev",
    description:
      "A developers platform, where questions related to information technology are asked. Everyone is allowed to ask and answer questions...",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: dieselng,
    project_link: "https://askdev.jofwitsolution.com",
    source_code_link: "https://github.com/",
  },
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
    name: "PID NG",
    description:
      "In the pursuit of justice, we stand united and harnessing data and upholding the law. Nigeria’s guidance",
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
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: pidng,
    project_link: "https://pidng.com",
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
    project_link: "https://prompay.vercel.app",
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
    name: "BibzyCarter Model",
    description:
      "BibzyCarter Model. A Professional Model Website. BibzyCarter Model BibzyCarter Model BibzyCarter Model.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: bibzycarter,
    project_link: "https://bibzy-carter-model.vercel.app/",
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
    image: guard_enforcement,
    project_link: "https://guardenfocement.com",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
