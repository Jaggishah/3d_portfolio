import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    lucid
} from "../assets/icons";
import services from "../assets/icons/oservices.jpg";
export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Lucid",
        icon: lucid,
        iconBg: "#accbe1",
        date: "Aug 2022 - Presents",
        points: [
            "Developing and maintaining web applications using React.js,Redux and other related technologies.",
            "Restful API's with FastAPI Framework from python",
            "Created Ton of automatin Scripts to increased the productivity",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Intership Trainee",
        company_name: "O7 Services",
        icon: services,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Jun 2021",
        points: [
            "Leraned industy standard and get knowledge how industy works these days.",
            "Acquire Knowledge of HTML,CSS and Javascipt",
        ],
    },
    {
        title: "Freelance",
        company_name: "Self-Employed",
        icon: typescript,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - present",
        points: [
            "Developing  web applications using React.js with redux state mangement system",
            "Developing full stack app with pyhton as backend"
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Jaggishah',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jugdeep-singh/',
    }
];

export const projects = [
    {
        iconUrl: nodejs,
        theme: 'btn-back-red',
        name: 'Backend Depplymnet',
        description: 'Developed a Backend For Web Appication ',
        link: 'https://github.com/Jaggishah/Express_mongoose',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Shopping Cart',
        description: 'Created a Shopping Cart to get to know ogiv behind shopping carts',
        link: 'https://github.com/Jaggishah/Shopping-cart',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '3d Car Model',
        description: 'Designed and built a 3d car model in WebApplication.',
        link: 'https://github.com/Jaggishah/lucid_car',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Python ChatApp',
        description: 'Allowing Users to share text Messages',
        link: 'https://github.com/Jaggishah/Python_Chatapp',
    },
 
];