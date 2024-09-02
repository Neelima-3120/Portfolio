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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Trainee Software Developer",
    company_name: "Hallmark Global Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept 2023 - June 2024",
    points: [
      "Developing and maintaining web applications using Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Independent Travel Manager",
    company_name: "ASAP Tickets | Dreamport",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Receive and process requests from customers interested in purchasing airline tickets and tour packages.",
      "Help customers to choose the best option by using one of the most advanced bookings and sales engines for airline tickets and tours.",
      "Build trust and long-term cooperation with customers.",
      "Engagement with a global travel organization with 20 years of experience on the market.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "NGG",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Nov 2022",
    points: [
      "Developing and maintaining web applications Proficient in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React and Vue. js.",
      "Responsible for the design and construction of websites.",
      "Integrating data from various back-end services and databases.",
      "Gather and refine specifications and requirements based on technical needs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but neelu proved me wrong.",
    name: "Shivani",
    designation: "Software Developer",
    company: "Hallmark",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like neelu does.",
    name: "Ravi",
    designation: "Senior Software Developer",
    company: "Hallmark",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After neelu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Bhargavi Rayadurgam",
    designation: ".NET Developer",
    company: "Hallmark",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "kryptogiffy",
    description:
      "KryptoGiffy is a platform that allows you to easily buy and sell cryptocurrencies. It offers a user-friendly interface, making it simple to trade various digital assets",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Esigns",
    description:
      "eSigns drives a unique, paperless digital work experience with its seamless digital workflows and entities for effective document and data management.",
    tags: [
      {
        name: "Vue.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Node.Js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Nimble Accounting",
    description:
    "Single-window platform, where hotels can track the performance of a chain of hotels with a centralized dashboard and automate their Vendor management to serve customers in more personalized ways.",
    tags: [
      {
        name: "Blazor",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
