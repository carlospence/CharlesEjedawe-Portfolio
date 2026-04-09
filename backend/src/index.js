import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());


// ── Routes ─────────────────────────────────────────────────

app.get("/", async (req, res) => {

    try {

        res.json({ message: `Welcome to the Charles Ejedawe Portfolio` });
        // res.json(products);
    } catch (err) {
        console.error(err);
        res.json({ message: `Welcome to the Charles Ejedawe Portfolio` });
    }

});

// // Health check
// app.get('/', (req, res) => {
//     res.json({ status: 'Welcome to Portfolio API' });
// });

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'API is running' });
});

// // ==================== BIO ====================
// app.get('/bio', async (req, res) => {
//     try {
//         const bio = await prisma.bio.findMany({
//             orderBy: { createdAt: 'desc' }
//         });
//         res.json(bio);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/bio/first', async (req, res) => {
//     try {
//         const bio = await prisma.bio.findFirst({
//             orderBy: { createdAt: 'desc' }
//         });
//         if (!bio) return res.json([]);
//         res.json([bio]);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.post('/bio', async (req, res) => {
//     try {
//         const bio = await prisma.bio.create({
//             data: req.body
//         });
//         res.status(201).json(bio);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.put('/bio/:id', async (req, res) => {
//     try {
//         const bio = await prisma.bio.update({
//             where: { id: parseInt(req.params.id) },
//             data: req.body
//         });
//         res.json(bio);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.delete('/bio/:id', async (req, res) => {
//     try {
//         await prisma.bio.delete({
//             where: { id: parseInt(req.params.id) }
//         });
//         res.json({ message: 'Bio deleted' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // ==================== PROJECTS ====================
// app.get('/projects', async (req, res) => {
//     try {
//         const projects = await prisma.project.findMany({
//             orderBy: { createdAt: 'desc' }
//         });
//         res.json(projects);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/projects/:id', async (req, res) => {
//     try {
//         const project = await prisma.project.findUnique({
//             where: { id: parseInt(req.params.id) }
//         });
//         if (!project) return res.status(404).json({ error: 'Project not found' });
//         res.json(project);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.post('/projects', async (req, res) => {
//     try {
//         const project = await prisma.project.create({
//             data: req.body
//         });
//         res.status(201).json(project);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.put('/projects/:id', async (req, res) => {
//     try {
//         const project = await prisma.project.update({
//             where: { id: parseInt(req.params.id) },
//             data: req.body
//         });
//         res.json(project);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.delete('/projects/:id', async (req, res) => {
//     try {
//         await prisma.project.delete({
//             where: { id: parseInt(req.params.id) }
//         });
//         res.json({ message: 'Project deleted' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // ==================== SKILLS ====================
// app.get('/skills', async (req, res) => {
//     try {
//         const skills = await prisma.skill.findMany({
//             orderBy: { category: 'asc' }
//         });

//         // Group by category
//         const grouped = skills.reduce((acc, skill) => {
//             if (!acc[skill.category]) acc[skill.category] = [];
//             acc[skill.category].push(skill.name);
//             return acc;
//         }, {});

//         res.json(grouped);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/skills/:id', async (req, res) => {
//     try {
//         const skill = await prisma.skill.findUnique({
//             where: { id: parseInt(req.params.id) }
//         });
//         if (!skill) return res.status(404).json({ error: 'Skill not found' });
//         res.json(skill);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.post('/skills', async (req, res) => {
//     try {
//         const skill = await prisma.skill.create({
//             data: req.body
//         });
//         res.status(201).json(skill);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.put('/skills/:id', async (req, res) => {
//     try {
//         const skill = await prisma.skill.update({
//             where: { id: parseInt(req.params.id) },
//             data: req.body
//         });
//         res.json(skill);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.delete('/skills/:id', async (req, res) => {
//     try {
//         await prisma.skill.delete({
//             where: { id: parseInt(req.params.id) }
//         });
//         res.json({ message: 'Skill deleted' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // ==================== EXPERIENCE ====================
// app.get('/experience', async (req, res) => {
//     try {
//         const experience = await prisma.experience.findMany({
//             orderBy: { startDate: 'desc' }
//         });
//         res.json(experience);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/experience/:id', async (req, res) => {
//     try {
//         const exp = await prisma.experience.findUnique({
//             where: { id: parseInt(req.params.id) }
//         });
//         if (!exp) return res.status(404).json({ error: 'Experience not found' });
//         res.json(exp);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.post('/experience', async (req, res) => {
//     try {
//         const exp = await prisma.experience.create({
//             data: {
//                 ...req.body,
//                 startDate: new Date(req.body.startDate),
//                 endDate: req.body.endDate ? new Date(req.body.endDate) : null
//             }
//         });
//         res.status(201).json(exp);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.put('/experience/:id', async (req, res) => {
//     try {
//         const exp = await prisma.experience.update({
//             where: { id: parseInt(req.params.id) },
//             data: {
//                 ...req.body,
//                 startDate: req.body.startDate ? new Date(req.body.startDate) : undefined,
//                 endDate: req.body.endDate ? new Date(req.body.endDate) : null
//             }
//         });
//         res.json(exp);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.delete('/experience/:id', async (req, res) => {
//     try {
//         await prisma.experience.delete({
//             where: { id: parseInt(req.params.id) }
//         });
//         res.json({ message: 'Experience deleted' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // ==================== CONTACTS ====================
// app.get('/contacts', async (req, res) => {
//     try {
//         const contacts = await prisma.contact.findMany({
//             orderBy: { createdAt: 'desc' }
//         });
//         res.json(contacts);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/contacts/:id', async (req, res) => {
//     try {
//         const contact = await prisma.contact.findUnique({
//             where: { id: parseInt(req.params.id) }
//         });
//         if (!contact) return res.status(404).json({ error: 'Contact not found' });
//         res.json(contact);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/contact', async (req, res) => {
//     try {
//         const contact = await prisma.contact.findFirst({
//             orderBy: { createdAt: 'desc' }
//         });
//         if (!contact) return res.json([]);
//         res.json([contact]);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.post('/contact', async (req, res) => {
//     try {
//         const contact = await prisma.contact.create({
//             data: {
//                 name: req.body.name,
//                 email: req.body.email,
//                 phone: req.body.phone,
//                 message: req.body.message
//             }
//         });
//         res.status(201).json({ message: 'Contact message received', contact });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// app.delete('/contacts/:id', async (req, res) => {
//     try {
//         await prisma.contact.delete({
//             where: { id: parseInt(req.params.id) }
//         });
//         res.json({ message: 'Contact deleted' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ error: 'Something went wrong' });
// });

// Start server
// app.listen(PORT, () => {
//     console.log(`✓ Server running on http://localhost:${PORT}`);
//     console.log(`✓ API available at http://localhost:${PORT}`);
// });

// if (process.env.NODE_ENV !== "production") {
//     const PORT = 3000;
//     app.listen(PORT, () => {
//         console.log(`Server running on http://localhost:${PORT}`);
//     });
// }

// ── Export for Vercel ───────────────────────────────────────
export default app;