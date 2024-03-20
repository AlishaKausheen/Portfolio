import { chat, Devit, spotify, food, gdsc } from "../assets/images";
import {
    
    contact,
    css,
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
    react,
    redux,
    tailwindcss,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "GDSC Web-Dev Lead",
        company_name: "GDSC-JKIAPT",
        icon: gdsc,
        iconBg: "#accbe1",
        date: "August 2023 - April 2024",
        points: [
            "Empowered and lead 150+ fellow students to create innovative web solutions by providing guidance and mentorship",
            "Assisting students to start their journey with web-technology by fostering a strong foundation in this field",
            "Hosted and lead a hands-on Web Development webinar , attended by 115+ students, providing practical experience ",
        ],
    },
]


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AlishaKausheen',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/alisha-kausheen-a534b2244',
    }
];

export const projects = [
    {
        iconUrl: Devit,
        theme: 'btn-back-red',
        name: 'DevIt',
        description: 'Developed a real-time code-editor with user authentication and authorisation having code-mirror functionality',
        link: 'https://github.com/AlishaKausheen/DevIt',
    },
    {
        iconUrl: food,
        theme: 'btn-back-green',
        name: 'Give A Treat',
        description: 'Designed and developed a Restaurant menu showcasing website having modern UI and animation',
        link: 'https://github.com/AlishaKausheen/Give-A-Treat',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-blue',
        name: 'GossipBee',
        description: 'Designed and built a group chat application allowing 5-10 users to interact at the same time, having functionality of notifying them of other user exist and entry',
        link: 'https://github.com/AlishaKausheen/GossipBee',
    },
    {
        iconUrl: spotify,
        theme: 'btn-back-pink',
        name: 'Spotify Clone',
        description: 'Designed Modern UI of spotify having replay, playback and forward features',
        link: 'https://github.com/AlishaKausheen/Spotify-Clone',
    }
];