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
    lucid,
    aws
    
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
    },
    {
        imageUrl : aws,
        name: "AWS",
        type: "Deployment"
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Lucid",
        icon: lucid,
        iconBg: "#accbe1",
        date: "July 2023 - Presents",
        points: [
        "Developed and maintained a diagnostic web platform using React, Redux, and SCSS, increasing system efficiency by 40%.",
        "Designed real-time diagnostic solutions using FastAPI (Python) and Node.js, reducing latency by 25%.",
        "Built highly scalable microservices architectures leveraging AWS (EC2, S3, API Gateway, Lambda) to support rapid user growth.",
        "Enhanced application security by implementing OAuth, JWT authentication, and role-based access control (RBAC).",
        "Automated CI/CD pipelines with GitLab Runners, improving deployment efficiency by 30%.",
        "Engineered 3D visualizations using Three.js and React Three Fiber, increasing engagement by 40%.",
        "Developed and maintained a real-time tracking system leveraging AWS SQS, Lambda, and WebSockets, enabling instant updates with minimal latency.",
        "Designed and implemented a micro-frontend architecture leveraging Webpack Module Federation, enabling independent deployment and seamless integration of multiple frontend applications."
    ]},
    {
        title: "Full Stack Developer",
        company_name: "Dew Software",
        icon: typescript,
        iconBg: "#b7e4c7",
        date: "Aug 2022 - July 2023",
        points: [
            "Developing Python scripts for car tracking and leveraging Python Tkinter library, I crafted a custom graphical user interface (GUI) that streamlined the monitoring process, offering a user-friendly interface for real-time tracking and management of vehicles, enhancing efficiency and control in the tracking system. ",
                "Designed a React-based diagnostic dashboard integrating third-party graphing libraries, improving analytics accessibility by 40%.",
                "Developed a Python-based automation system with a Tkinter GUI for real-time car diagnostics, boosting operational efficiency by 35%.",
                "Built RESTful APIs to optimize user interactions and improve data processing speeds.",
                "Developed a Python-based GUI application using PyQt/Tkinter for managing OTA API dashboards, integrating WebSockets for real-time synchronization and Pandas with SQLAlchemy for data management and reporting, streamlining fleet operations and reducing manual tracking efforts."
            
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Smartwinz Solutions",
        icon: typescript,
        iconBg: "#b7e4c7",
        date: "Aug 2022 - July 2023",
        points: [
            "Crafting an ecommerce platform with the React framework, we're leveraging its powerful capabilities to build dynamic, user-friendly interfaces that enhance the shopping experience. Through React's component-based architecture and state management.",
            "Handled server management for hosting client websites, ensuring configurations, security, and performance optimizations",
                "Developed an eCommerce platform using React and Next.js, enhancing customer engagement and sales.",
                "Managed server configurations, security, and performance optimizations for multiple client platforms."
        
        ],
    },
    {
        title: "Web Developer",
        company_name: "O7 Services",
        icon: services,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Jun 2021",
        points: [
            "Leveraged HTML, CSS, and JavaScript for front-end web development, with experience in Java for backend development. Skilled in creating responsive and interactive web applications to deliver exceptional user experiences."
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
        name: 'Complete Mangement System',
        description: 'A management for like jira ticket with drag and drop functionality using postgressql',
        link: ' https://github.com/Jaggishah/ProjectManagement',
    },
   
    {
        iconUrl: nodejs,
        theme: 'btn-back-red',
        name: 'Complete Backend Nodejs App',
        description: 'Developed a Backend For Web Appication with a oauth ',
        link: 'https://github.com/Jaggishah/Nodejs_OAuth',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Pokemon App',
        description: 'Created aPokemon App using react and redux state management tool with tailwind css',
        link: 'https://github.com/Jaggishah/Pokemon-App',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AI Saas App',
        description: 'Created aAI Saas App using convex with tailwind css',
        link: 'https://github.com/Jaggishah/AITestEdenAI',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'React Native App',
        description: 'React Native App with CLI',
        link: 'https://github.com/Jaggishah/JaggiMusicApp',
        
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
    {
        iconUrl: aws,
        theme: 'btn-back-pink',
        name: 'AWS Mini Projects',
        description: 'AWS Deployment',
        link: 'https://github.com/Jaggishah/AWS_PROJECTS',
    },
    {
        iconUrl: github,
        theme: 'btn-back-blue',
        name: 'React Native',
        description: 'A Simple reactNative video sharing app',
        link: 'https://github.com/Jaggishah/ReactNative_Aora',
    },
   
 
];