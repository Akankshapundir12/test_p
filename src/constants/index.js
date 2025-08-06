import { meta, sap,cdg, shopify, starbucks, tesla, altair, codsoft, bharat, glbajaj, aps, hackathon, deloitte, research, organizinghead, finxthon, winner,semifinalist } from "../assets/images";
import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    ally,
    tailwindcss,
    threads,
    typescript,
    firebase,
    flask,
    mysql,
    python,
    streamlit,
    vscode,
    java,
    cpp,
    school,
    linktree,
    aws,
    tensorflow,
    springboot,
    c,
    googlecolab,
    androidstudio,
    crop
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
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
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Backend",
    }, 
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: vscode,
        name: "VS Code",
        type: "Development Tools",
    },
    {
        imageUrl: googlecolab,
        name: "Google Colab",
        type: "Development Tools",
    },
    {
        imageUrl: androidstudio,
        name: "Android Studio",
        type: "Development Tools",
    }
];

export const experiences = [
    {
        title: "Data Science Intern",
        company_name: "Altair",
        icon: altair,
        iconBg: "#E6F3FF",
        date: "July 2024 - September 2024",
        points: [
            "Completed a 10-week industry-aligned internship with hands-on experience in real-world data science projects.",
            "Preprocessed data and engineered features to enhance model performance and reliability.",
            "Leveraged tools like SQL for data extraction, Pandas and Matplotlib/Seaborn for exploratory data analysis and visualization.",
            "Collaborated in a team using Git and GitHub to maintain clean, version-controlled code.",
        ],
    },
    {
        title: "Cloud Intern",
        company_name: "Amazon Web Services (AWS) Academy",
        icon: aws,
        iconBg: "#f3f4f7ff",
        date: "September 2023 - November 2023",
        points: [
            "Completed a 10-week internship focused on AWS cloud infrastructure, services, and deployment strategies",
            "Gained understanding of core AWS components such as EC2, S3, IAM, VPC, and CloudWatch.",
            "Explored principles of scalable, fault-tolerant, and cost-effective cloud architecture and also familiarized with resource provisioning, identity access management, and virtual networking.",
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "Bharat Intern",
        icon: bharat,
        iconBg: "#7c3aed",
        date: "September 2023 - October 2023",
        points: [
          "Built responsive web applications including a portfolio site and utility tools using Python and HTML/CSS, while gaining hands-on experience in version control, code structuring, and basic deployment practices."
        ],
    },
    {
        title: "C++ Programming Intern",
        company_name: "Codsoft",
        icon: codsoft,
        iconBg: "#7c3aed",
        date: "August 2023 - September 2023",
        points: [
          "Developed software solutions using C++ by applying data structures, object-oriented programming, and algorithmic logic, with a focus on debugging, performance optimization, and real-world implementation."
        ],
    }
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Akankshapundir12',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akanksha-pundir-8345aa259/',
    },
    {
        name: 'LinkTree',
        iconUrl: linktree,
        link: 'https://linktr.ee/akanksha_pundir',
    }
];

export const projects = [
    {
        iconUrl: ally,
        iconBg: "#E6F3FF",
        name: '9 to 5 Ally',
        description: 'Spearheaded the development of an AI-powered Android app enhancing employee well-being, combining real-time NLP sentiment analysis (Python, TensorFlow), secure anonymous complaint handling, and a Firebase-integrated Java dashboard—successfully analyzing 10K+ inputs and driving proactive morale management across 500+ sentiment check-ins.',
        link: 'https://github.com/Akankshapundir12/9-to-5-Ally',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'Vendor Cab and Driver Onboarding System',
        description: 'Spearheaded the end-to-end development of a modular Spring Boot-based vendor management system, engineered for seamless onboarding and operational oversight of drivers and vehicles across a dynamic multi-tier vendor hierarchy. Integrated role-based REST APIs, CSV-driven persistence, and a responsive HTML+JS frontend—delivering real-time dashboards, secure access delegation (Super → Local Admin), and efficient document-driven workflows. Successfully enabled structured management across 500+ driver-vehicle records, enhancing traceability, scalability, and operational control.',
        link: 'https://github.com/Akankshapundir12/Vendor-Cab-and-Driver-Onboarding-Vendor-Hierarchy-Management-',
    },
    {
        iconUrl: crop,
        theme: 'btn-back-white',
        name: 'AI Crop Disease Detection',
        description: 'Developed an AI-powered application for real-time crop disease and pest detection using convolutional neural networks (CNNs) and machine learning (Python), achieving high accuracy across 50+ crop image tests. Integrated Firebase for seamless backend communication and built a responsive Java-based user interface—empowering farmers with instant, data-driven insights to support timely and informed decision-making in agriculture.',
        link: 'https://github.com/Akankshapundir12/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'MPIN Validator',
        description: 'A robust MPIN (Mobile PIN) validation system that checks for common patterns, demographic information, and keypad patterns to ensure strong and secure MPINs.',
        link: 'https://github.com/Akankshapundir12/MPIN_Validator',
    }
];

export const education = [
    {
        title: "B.Tech, Computer Science and Engineering",
        company_name: "G. L. Bajaj Institute of Technology and Management",
        icon: glbajaj,
        iconBg: "#fbc3bc",
        date: "2022 – 2026",
        points: [
            "GPA: 8.65",
            "Relevant Coursework: OOPS, Databases, Data Structures and Algorithms, Operating Systems, Computer Networks, Web Development, Software Engineering",
            "Location: Greater Noida, India",
        ],
    },
    {
        title: "Senior Secondary & High School",
        company_name: "Army Public School Mamun Military Station",
        icon: aps,
        iconBg: "#accbe1",
        date: "2020 – 2021",
        points: [
            "Stream: Science (PCM)",
            "12th Percentage: 92.80%",
            "10th Percentage: 94.40%",
            "Location: Pathankot, India",
        ],
    },
];

export const achievements = [
    {
        title: "Finalist: SAP Hackfest 2025",
        image: sap,
        description: "Outperformed 3000+ participants across 2000+ teams to become one of the top 10 finalists, showcasing innovation in enterprise solutions.",
    },
    {
        title: "Finalist: CDG Ideathon",
        image: cdg,
        description: "Ranked among the top 7 teams out of 100+ contenders, recognized for impactful ideation and strategic problem-solving.",
    },
    {
        title: "Winner: Basketball Inter Technical University.",
        image: winner,
        description: "Clinched the championship title at the Zonal Level of the 2023–24 Inter-University Technical Sports Fest, demonstrating teamwork, strategy, and competitive excellence.",
    },
    {
        title: "State Semi-Finalist – Inter-University Technical Sports Fest 2023–24:",
        image: semifinalist,
        description: `State-Level Basketball Representative – showcased team strategy and athletic excellence at the 2023–24 Inter-University Tech Sports Championship.`,   
    },
    {
        title: "Organizing Head: 3rd ICDT-2025",
        description:
            "Served as the Organizing Head for the 3rd International Conference on Disruptive Technologies(ICT-2025), overseeing all aspects of event planning and execution.",
    },
];
