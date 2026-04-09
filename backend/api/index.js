import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';

const { Pool } = pkg;
dotenv.config();

// ✅ Guard: fail fast with a clear message if DB isn't configured
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
}

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Pool error handler
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
});

// Middleware
app.use(cors());
app.use(express.json());

// ── Helper Functions ─────────────────────────────────────

/**
 * Execute a query with optional parameters
 * @param {string} sql - SQL query string
 * @param {array} params - Query parameters for parameterized queries
 * @returns {Promise} Query result
 */
const query = (sql, params = []) => pool.query(sql, params);

// ── Routes ─────────────────────────────────────────────────

app.get("/", async (req, res) => {
    try {
        res.json({ message: `Welcome to the Charles Ejedawe Portfolio` });
    } catch (err) {
        console.error(err);
        res.json({ message: `Welcome to the Charles Ejedawe Portfolio` });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'API is running' });
});

// ==================== BIO ====================

app.get('/bio', async (req, res) => {
    try {
        const result = await query('SELECT * FROM "Bio" ORDER BY "createdAt" DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching bio:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/bio/first', async (req, res) => {
    try {
        const result = await query('SELECT * FROM "Bio" ORDER BY "createdAt" DESC LIMIT 1');
        res.json(result.rows.length > 0 ? result.rows : []);
    } catch (error) {
        console.error('Error fetching first bio:', error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/bio', async (req, res) => {
    try {
        const { name, email, phone, location, title, bio, github, linkedin, facebook, twitter, tiktok } = req.body;
        const result = await query(
            `INSERT INTO "Bio" (name, email, phone, location, title, bio, github, linkedin, facebook, twitter, tiktok, "createdAt", "updatedAt")
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW())
             RETURNING *`,
            [name, email || null, phone || null, location || null, title, bio, github || null, linkedin || null, facebook || null, twitter || null, tiktok || null]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating bio:', error);
        res.status(400).json({ error: error.message });
    }
});

app.put('/bio/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, location, title, bio, github, linkedin, facebook, twitter, tiktok } = req.body;

        const result = await query(
            `UPDATE "Bio" SET name = $1, email = $2, phone = $3, location = $4, title = $5, bio = $6, github = $7, linkedin = $8, facebook = $9, twitter = $10, tiktok = $11, "updatedAt" = NOW()
             WHERE id = $12
             RETURNING *`,
            [name, email || null, phone || null, location || null, title, bio, github || null, linkedin || null, facebook || null, twitter || null, tiktok || null, parseInt(id)]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Bio not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating bio:', error);
        res.status(400).json({ error: error.message });
    }
});

app.delete('/bio/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('DELETE FROM "Bio" WHERE id = $1 RETURNING id', [parseInt(id)]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Bio not found' });
        }
        res.json({ message: 'Bio deleted' });
    } catch (error) {
        console.error('Error deleting bio:', error);
        res.status(400).json({ error: error.message });
    }
});

// ==================== PROJECTS ====================

app.get('/projects', async (req, res) => {
    try {
        const result = await query('SELECT * FROM "Project" ORDER BY "createdAt" DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('SELECT * FROM "Project" WHERE id = $1', [parseInt(id)]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/projects', async (req, res) => {
    try {
        const { name, description, techStack, github, demo, imageUrl } = req.body;
        const result = await query(
            `INSERT INTO "Project" (name, description, "techStack", github, demo, "imageUrl", "createdAt", "updatedAt")
             VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
             RETURNING *`,
            [name, description, techStack || [], github, demo || null, imageUrl || null]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(400).json({ error: error.message });
    }
});

app.put('/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, techStack, github, demo, imageUrl } = req.body;

        const result = await query(
            `UPDATE "Project" SET name = $1, description = $2, "techStack" = $3, github = $4, demo = $5, "imageUrl" = $6, "updatedAt" = NOW()
             WHERE id = $7
             RETURNING *`,
            [name, description, techStack || [], github, demo || null, imageUrl || null, parseInt(id)]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating project:', error);
        res.status(400).json({ error: error.message });
    }
});

app.delete('/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('DELETE FROM "Project" WHERE id = $1 RETURNING id', [parseInt(id)]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json({ message: 'Project deleted' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(400).json({ error: error.message });
    }
});

// ==================== SKILLS ====================

app.get('/skills', async (req, res) => {
    try {
        const result = await query('SELECT * FROM "Skill" ORDER BY category ASC');

        // Group by category
        const grouped = result.rows.reduce((acc, skill) => {
            if (!acc[skill.category]) acc[skill.category] = [];
            acc[skill.category].push(skill.name);
            return acc;
        }, {});

        res.json(grouped);
    } catch (error) {
        console.error('Error fetching skills:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/skills/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('SELECT * FROM "Skill" WHERE id = $1', [parseInt(id)]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching skill:', error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/skills', async (req, res) => {
    try {
        const { name, category } = req.body;
        const result = await query(
            `INSERT INTO "Skill" (name, category, "createdAt", "updatedAt")
             VALUES ($1, $2, NOW(), NOW())
             RETURNING *`,
            [name, category]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating skill:', error);
        res.status(400).json({ error: error.message });
    }
});

app.put('/skills/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category } = req.body;

        const result = await query(
            `UPDATE "Skill" SET name = $1, category = $2, "updatedAt" = NOW()
             WHERE id = $3
             RETURNING *`,
            [name, category, parseInt(id)]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating skill:', error);
        res.status(400).json({ error: error.message });
    }
});

app.delete('/skills/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('DELETE FROM "Skill" WHERE id = $1 RETURNING id', [parseInt(id)]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Skill not found' });
        }
        res.json({ message: 'Skill deleted' });
    } catch (error) {
        console.error('Error deleting skill:', error);
        res.status(400).json({ error: error.message });
    }
});

// ==================== EXPERIENCE ====================

app.get('/experience', async (req, res) => {
    try {
        const result = await query('SELECT * FROM "Experience" ORDER BY "startDate" DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching experience:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/experience/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('SELECT * FROM "Experience" WHERE id = $1', [parseInt(id)]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Experience not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching experience:', error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/experience', async (req, res) => {
    try {
        const { type, company, position, startDate, endDate, description, location } = req.body;
        const result = await query(
            `INSERT INTO "Experience" (type, company, position, "startDate", "endDate", description, location, "createdAt", "updatedAt")
             VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
             RETURNING *`,
            [type, company, position, startDate, endDate || null, description, location]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating experience:', error);
        res.status(400).json({ error: error.message });
    }
});

app.put('/experience/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { type, company, position, startDate, endDate, description, location } = req.body;

        const result = await query(
            `UPDATE "Experience" SET type = $1, company = $2, position = $3, "startDate" = $4, "endDate" = $5, description = $6, location = $7, "updatedAt" = NOW()
             WHERE id = $8
             RETURNING *`,
            [type, company, position, startDate, endDate || null, description, location, parseInt(id)]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Experience not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating experience:', error);
        res.status(400).json({ error: error.message });
    }
});

app.delete('/experience/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('DELETE FROM "Experience" WHERE id = $1 RETURNING id', [parseInt(id)]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Experience not found' });
        }
        res.json({ message: 'Experience deleted' });
    } catch (error) {
        console.error('Error deleting experience:', error);
        res.status(400).json({ error: error.message });
    }
});

// ==================== CONTACTS ====================

app.get('/contacts', async (req, res) => {
    try {
        const result = await query('SELECT * FROM "Contact" ORDER BY "createdAt" DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/contacts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('SELECT * FROM "Contact" WHERE id = $1', [parseInt(id)]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching contact:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/contact', async (req, res) => {
    try {
        const result = await query('SELECT * FROM "Contact" ORDER BY "createdAt" DESC LIMIT 1');
        res.json(result.rows.length > 0 ? result.rows : []);
    } catch (error) {
        console.error('Error fetching first contact:', error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, location, message } = req.body;
        const result = await query(
            `INSERT INTO "Contact" (name, email, phone, location, message, "createdAt", "updatedAt")
             VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
             RETURNING *`,
            [name, email, phone || null, location || null, message]
        );
        res.status(201).json({ message: 'Contact message received', contact: result.rows[0] });
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(400).json({ error: error.message });
    }
});

app.delete('/contacts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('DELETE FROM "Contact" WHERE id = $1 RETURNING id', [parseInt(id)]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted' });
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(400).json({ error: error.message });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('Shutting down gracefully...');
    await pool.end();
    process.exit(0);
});

// Start server
if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => console.log('Running on http://localhost:3000'));
}

// ── Export for Vercel ───────────────────────────────────────
export default app;