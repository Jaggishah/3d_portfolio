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
            "Leveraging React, Redux, SCSS, and Material-UI, I crafted a dynamic frontend with seamless user experience, efficient state management, and polished design, meeting project goals effectively that increased interaction by 40%.",
            "Integrated code repositories with CI/CD pipelines to trigger automated builds upon code commits under Gitlab Runners.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Integrating FastAPI for Python-based endpoints and Node.js for server-side logic, I established a robust backend infrastructure, ensuring seamless communication with the frontend and efficient data processing..",
            "Employing AWS EC2 for scalable computing power, S3 for reliable storage, and API Gateway for seamless API management, I architected a resilient and scalable backend infrastructure.",
            "Implementing microservices architecture on the frontend using Webpack, modularized the application into independent,reusable components, enhancing maintainability and scalability.",
            "By harnessing the power of Three.js, I constructed a captivating 3D component, enriching the user experience with immersive visuals and interactivity, elevating the frontend to new dimensions of engagement and creativity."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Dew Software",
        icon: typescript,
        iconBg: "#b7e4c7",
        date: "Aug 2022 - July 2023",
        points: [
            "Developing Python scripts for car tracking and leveraging Python Tkinter library, I crafted a custom graphical user interface (GUI) that streamlined the monitoring process, offering a user-friendly interface for real-time tracking and management of vehicles, enhancing efficiency and control in the tracking system. ",
            "Constructing a React dashboard for graph implementation with a third-party library boosted efficiency by an impressive 40%, offering users streamlined access to insightful analytics and empowering decision-making through intuitive graphical representations",
            "Implementing Python-based automation with a RESTful API for user interactions dramatically improved performance, especially in daily report generation. This solution optimised calculation processes, providing users with swift access to accurate data, thereby enhancing efficiency and productivity.",
            "Developing  web applications using React.js with redux state mangement system",
            "Developing full stack app with pyhton as backend"
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
        ],
    },
    {
        title: "Intership Trainee",
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