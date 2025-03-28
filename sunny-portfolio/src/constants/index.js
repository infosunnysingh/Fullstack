import {
  react,
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
  prog,
  calsoft,
  agbe,
  qls,
  invoice,
  quiz,
  textutils,
  threejs,
  next,
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
    title: "ReactJS Developer",
    icon: react,
  },
  {
    title: "NextJS Developer",
    icon: next,
  },
  {
    title: "NodeJS Developer",
    icon: nodejs,
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
    company_name: "QLS Academy",
    icon: qls,
    iconBg: "#383E56",
    date: "Sep 2020 - Jan 2022",
    points: [
      "Developed the QLS Academy fee collection system using React.js, optimizing student data management.",
      "Built a Student Information System (SIS) for seamless academic record handling.",
      "Designed a responsive UI with HTML5, CSS3, Bootstrap 5 and JavaScript for an enhanced user experience.",
      "Integrated REST APIs to enable real-time data flow and improve system performance.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "AgBe Technology",
    icon: agbe,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Developed interactive thank-you pages for Tata 1MG using React.js, enhancing user engagement.",
      "Implemented real-time prescription status updates with React.js and Redux.",
      "Integrated frontend with backend systems to display live prescription information.",
      "Optimized UI components using Tailwind CSS, improving responsiveness and performance.",
      "Developed Agrictools, India’s first farm mechanization platform, using React.js and Redux.",
      "Integrated REST APIs for dynamic agricultural tool management and real-time data handling.",
      "Enhanced frontend performance and scalability through efficient state management with Redux.",
    ],
  },

  {
    title: "Development Engineer",
    company_name: "Calsoft Pvt Ltd",
    icon: calsoft,
    iconBg: "#383E56",
    date: "Sep 2022 - May 2024",
    points: [
      "Developed dynamic and interactive dashboards for Simnovus, a SaaS platform providing AI-driven business insights.",
      "Built real-time data visualizations and customizable reporting modules using React.js and Redux.",
      "Designed and optimized responsive UI components using Tailwind CSS for seamless user experience.",
      "Integrated frontend components with REST APIs to enable smooth data flow and real-time updates.",
      "Enhanced platform performance by optimizing build processes with Webpack.",
      "Collaborated with product managers to align features with business goals and user needs.",
      "Documented development processes and contributed to knowledge sharing within the team.",
    ],
  },
  //4th Orgnization Experiense
  {
    title: "Senior Software Developer",
    company_name: "Programming.com",
    icon: prog,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Invoice Generator",
    description:
      "A web-based Invoice Generator enabling quick creation of professional invoices with real-time calculations. Includes customizable templates and PDF export for efficient client billing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: invoice,
    source_code_link:
      "https://github.com/infosunnysingh/InvoiceGenerator_React.git",
  },
  {
    name: "Quiz Web App",
    description:
      "A React.js-based Quiz Web App featuring timed questions, score tracking, and category selection. Designed for an engaging and responsive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/infosunnysingh/QuizWebApp_React.git",
  },
  {
    name: "TextUtils",
    description:
      "Ah, I see! TextUtils is a tool designed to help with text manipulation, providing features like word count, character count, and other text-processing functionalities.",
    tags: [
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: textutils,
    source_code_link: "https://github.com/infosunnysingh/TextUtils_React.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
