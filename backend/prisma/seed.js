import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.contact.deleteMany();
    await prisma.experience.deleteMany();
    await prisma.project.deleteMany();
    await prisma.skill.deleteMany();

    // Seed Skills
    const skills = await Promise.all([
        // Programming Languages
        prisma.skill.create({ data: { name: 'C#', category: 'Programming' } }),
        prisma.skill.create({ data: { name: 'JavaScript', category: 'Programming' } }),
        prisma.skill.create({ data: { name: 'TypeScript', category: 'Programming' } }),
        prisma.skill.create({ data: { name: 'Python', category: 'Programming' } }),
        prisma.skill.create({ data: { name: 'Java', category: 'Programming' } }),
        prisma.skill.create({ data: { name: 'SQL', category: 'Programming' } }),

        // Frontend
        prisma.skill.create({ data: { name: 'React', category: 'Frontend' } }),
        prisma.skill.create({ data: { name: 'Vue', category: 'Frontend' } }),
        prisma.skill.create({ data: { name: 'Bootstrap', category: 'Frontend' } }),
        prisma.skill.create({ data: { name: 'NextJS', category: 'Frontend' } }),
        prisma.skill.create({ data: { name: 'Flutter', category: 'Frontend' } }),

        // Backend
        prisma.skill.create({ data: { name: 'Express.js', category: 'Backend' } }),
        prisma.skill.create({ data: { name: 'Django', category: 'Backend' } }),
        prisma.skill.create({ data: { name: 'ASP.NET Core', category: 'Backend' } }),
        prisma.skill.create({ data: { name: 'ASP.NET', category: 'Backend' } }),
        prisma.skill.create({ data: { name: 'Node.js', category: 'Backend' } }),

        // Database
        prisma.skill.create({ data: { name: 'MSSQL', category: 'Database' } }),
        prisma.skill.create({ data: { name: 'PostgreSQL', category: 'Database' } }),
        prisma.skill.create({ data: { name: 'MySQL', category: 'Database' } }),
        prisma.skill.create({ data: { name: 'Redis', category: 'Database' } }),

        // DevOps & Tools
        prisma.skill.create({ data: { name: 'Docker', category: 'DevOps' } }),
        prisma.skill.create({ data: { name: 'Git', category: 'DevOps' } }),
        prisma.skill.create({ data: { name: 'Azure', category: 'DevOps' } }),
        prisma.skill.create({ data: { name: 'AWS', category: 'DevOps' } }),
        prisma.skill.create({ data: { name: 'GCP', category: 'DevOps' } }),
        prisma.skill.create({ data: { name: '.NET Framework', category: 'DevOps' } }),

        // ML & Data Science
        prisma.skill.create({ data: { name: 'NumPy', category: 'ML & Data' } }),
        prisma.skill.create({ data: { name: 'Pandas', category: 'ML & Data' } }),
        prisma.skill.create({ data: { name: 'PyTorch', category: 'ML & Data' } }),
        prisma.skill.create({ data: { name: 'Power BI', category: 'ML & Data' } }),
    ]);

    console.log(`✓ Created ${skills.length} skills`);

    // Seed Projects
    const projects = await Promise.all([
        prisma.project.create({
            data: {
                name: 'Sowinna Platform',
                description: 'Web platform to track and manage evangelism contacts for religious organizations. Built during COVID-19 to streamline contact management and communication. Features include user authentication, contact tracking and management, bulk SMS, bulk email, and WhatsApp integration.',
                techStack: ['JavaScript', 'TypeScript', 'React', 'Express.js', 'PostgreSQL'],
                github: 'https://github.com/charles-ejedawe/sowinna',
                demo: 'https://sowinna.com/',
                imageUrl: 'https://via.placeholder.com/400x300?text=Sowinna+Platform'
            }
        }),
        prisma.project.create({
            data: {
                name: 'ADRobot Monitor',
                description: 'Web platform to track uptime status of custom advert monitoring servers for clients. Provides real-time notifications when servers go down within 30 seconds. Features include user authentication, interactive dashboard, SMS alerts, email alerts, in-app notifications, and PIFA integration.',
                techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Azure'],
                github: 'https://github.com/charles-ejedawe/adrobot-monitor',
                demo: 'https://admonitor.kaplaas.com/',
                imageUrl: 'https://via.placeholder.com/400x300?text=ADRobot+Monitor'
            }
        }),
    ]);

    console.log(`✓ Created ${projects.length} projects`);

    // Seed Experience
    const experience = await Promise.all([
        prisma.experience.create({
            data: {
                type: 'work',
                company: 'ArkTechnion Solutions',
                position: 'Full Stack Developer / Data Analyst',
                startDate: new Date('2020-06-01'),
                endDate: new Date('2025-08-31'),
                description: 'Designed and implemented server-side logic (Node.js, Python, C#, etc) and integrated ML/AI data pipelines using ETL processes. Created data models using RDBMS principles with MSSQL, MySQL, PostgreSQL, MongoDB. Deployed applications to cloud platforms (Azure, AWS, Vercel). Designed and developed interactive Power BI dashboards for data visualization. Initiated containerization of critical services with Docker, reducing environment inconsistency by 95%.',
                location: 'Lagos, Nigeria'
            }
        }),
        prisma.experience.create({
            data: {
                type: 'work',
                company: 'Bluemicros',
                position: 'Full Stack Developer',
                startDate: new Date('2017-05-01'),
                endDate: new Date('2020-03-31'),
                description: 'Built user interfaces using React and Vue frameworks. Led team development of robust reporting platform for advert monitoring application, reducing report generation time from 4 minutes to 48 seconds using Django, Pandas, SQL Queries and Power BI. Designed and implemented multiple RESTful API endpoints for third-party clients, increasing adoption by 60%. Collaborated with 15+ key stakeholders to design complex solutions from inception to production.',
                location: 'Lagos, Nigeria'
            }
        }),
        prisma.experience.create({
            data: {
                type: 'education',
                company: 'University of New Brunswick',
                position: 'Master of Science in Computer Science',
                startDate: new Date('2025-09-01'),
                endDate: null,
                description: 'Faculty of Computer Science Co-op Program. Current GPA: 4.1',
                location: 'Fredericton, NB'
            }
        }),
        prisma.experience.create({
            data: {
                type: 'education',
                company: 'Ambrose Alli University',
                position: 'Bachelor of Computer Science',
                startDate: new Date('2004-08-01'),
                endDate: new Date('2008-08-31'),
                description: 'NACOSS Student Innovation Award (2006-2007) for Development of E-Voting System',
                location: 'Ekpoma, Edo, Nigeria'
            }
        }),
    ]);

    console.log(`✓ Created ${experience.length} experience entries`);

    console.log('✓ Database seeded successfully!');
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
