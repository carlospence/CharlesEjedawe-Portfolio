export const portfolioData = {
    hero: {
        name: "Charles Ewaifoh Ejedawe",
        title: "Full Stack Developer & Data Analyst",
        bio: "Faculty of Computer Science Co-op Program | Master's Student at University of New Brunswick. Specializing in scalable web applications, data pipelines, and cloud deployment. Experienced Full Stack Developer with 5+ years building systems that matter.",
        github: "https://github.com/charles-ejedawe",
        linkedin: "https://linkedin.com/in/charles-ejedawe"
    },

    skills: {
        "Programming": ["C#", "JavaScript", "TypeScript", "Python", "Java", "SQL"],
        "Frontend": ["React", "Vue", "Bootstrap", "NextJS", "Flutter"],
        "Backend": ["Express.js", "Django", "ASP.NET Core", "ASP.NET", "Node.js"],
        "Database": ["MSSQL", "PostgreSQL", "MySQL", "Redis"],
        "DevOps": ["Docker", "Git", "Azure", "AWS", "GCP", ".NET Framework"],
        "ML & Data Analysis": ["NumPy", "Pandas", "PyTorch", "Power BI"]
    },

    projects: [
        {
            id: 1,
            name: 'Movie Mafia',
            description: 'A microservices-based movie discovery platform that helps users find movies and series quickly with ratings, reviews, and personalized recommendations.',
            techStack: ['JavaScript', 'TypeScript', 'React', 'Express.js', 'PostgreSQL', 'Docker', 'Azure', 'Kubernetes', 'Kafka', 'Redis'],
            github: 'https://github.com/carlospence/MovieMafia',
            demo: 'https://mmafia.xyz/',
            imageUrl: 'movie-mafia.png'
        },
        {
            id: 2,
            name: "Sowinna Platform",
            description: "Web platform to track and manage evangelism contacts for religious organizations. Built during COVID-19 to streamline contact management and communication.",
            techStack: ["JavaScript", "TypeScript", "React", "Express.js", "PostgreSQL"],
            github: "https://github.com/charles-ejedawe/sowinna",
            demo: "https://sowinna.com/",
            imageUrl: "sowinna-platform.png"
        },
        {
            id: 3,
            name: "ADRobot Monitor",
            description: "Web platform to track uptime status of custom advert monitoring servers. Provides real-time notifications when servers go down.",
            techStack: ["TypeScript", "React", "Next.js", "Node.js", "Azure"],
            github: "https://github.com/charles-ejedawe/adrobot-monitor",
            demo: "https://admonitor.kaplaas.com/",
            imageUrl: "adrobot-monitor.png"
        }
    ],

    experience: [
        {
            id: 1,
            type: "work",
            company: "ArkTechnion Solutions",
            position: "Full Stack Developer / Data Analyst",
            startDate: "2020-06",
            endDate: "2025-08",
            description: "Designed and implemented server-side logic (Node.js, Python, C#, etc) and integrated ML/AI data pipelines using ETL processes. Created data models using RDBMS principles with MSSQL, MySQL, PostgreSQL, MongoDB. Deployed applications to cloud platforms (Azure, AWS, Vercel). Designed and developed interactive Power BI dashboards for data visualization and decision-making. Initiated containerization of critical services with Docker, reducing environment inconsistency by 95%.",
            location: "Lagos, Nigeria"
        },
        {
            id: 2,
            type: "work",
            company: "Bluemicros",
            position: "Full Stack Developer",
            startDate: "2017-05",
            endDate: "2020-03",
            description: "Built user interfaces using React and Vue frameworks. Led team development of robust reporting platform for advert monitoring application, reducing report generation time from 4 minutes to 48 seconds using Django, Pandas, SQL Queries, and Power BI. Designed and implemented multiple RESTful API endpoints for third-party clients, increasing platform adoption by 60%. Collaborated with 15+ key stakeholders to design complex solutions from inception to production.",
            location: "Lagos, Nigeria"
        },
        {
            id: 3,
            type: "education",
            company: "University of New Brunswick",
            position: "Master of Science in Computer Science",
            startDate: "2025-09",
            endDate: null,
            description: "Faculty of Computer Science Co-op Program. Current GPA: 4.1",
            location: "Fredericton, NB"
        },
        {
            id: 4,
            type: "education",
            company: "Ambrose Alli University",
            position: "Bachelor of Computer Science",
            startDate: "2004-08",
            endDate: "2008-08",
            description: "NACOSS Student Innovation Award (2006-2007) for Development of E-Voting System",
            location: "Ekpoma, Edo, Nigeria"
        }
    ],

    contact: {
        email: "carlospence@gmail.com",
        phone: "+1 (506) 636-2025",
        location: "Fredericton, New Brunswick, Canada"
    }
}
