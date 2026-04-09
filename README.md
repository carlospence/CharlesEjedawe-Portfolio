# Resume Portfolio Application

This project includes a full-stack web application with:
- **Frontend**: React with Vite and Tailwind CSS
- **Backend**: Express.js API with PostgreSQL and Prisma ORM

## Project Structure

```
frontend/          - React portfolio website
  src/
    components/    - React components
    data/          - Portfolio data
    pages/         - Admin dashboard
    
backend/           - Express API server
  src/
    index.js       - Main server file
  prisma/
    schema.prisma  - Database schema
```

## Frontend Setup

### Installation
```bash
cd frontend
npm install
```

### Development
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build
```bash
npm run build
```

## Backend Setup

### Prerequisites
- PostgreSQL installed and running
- Node.js 16+

### Installation
```bash
cd backend
npm install
```

### Environment Setup
1. Copy `.env.example` to `.env`
2. Update `DATABASE_URL` with your PostgreSQL connection string

```env
DATABASE_URL="postgresql://user:password@localhost:5432/resume_portfolio"
PORT=3000
```

### Database Setup
```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# View database (optional)
npm run prisma:studio
```

### Development
```bash
npm run dev
```
The API will be available at `http://localhost:3000/api`

### API Endpoints

**Projects**
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

**Skills**
- `GET /api/skills` - Get all skills (grouped by category)
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

**Experience**
- `GET /api/experience` - Get all experience entries
- `POST /api/experience` - Create experience
- `PUT /api/experience/:id` - Update experience
- `DELETE /api/experience/:id` - Delete experience

**Contact**
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contact submissions
- `DELETE /api/contacts/:id` - Delete contact

## Running Both Applications

### Terminal 1 - Frontend
```bash
cd frontend
npm run dev
```

### Terminal 2 - Backend
```bash
cd backend
npm run dev
```

Visit `http://localhost:5173` in your browser to access the portfolio.

## Customization

Edit `frontend/src/data/portfolio.js` to customize your portfolio content:
- Hero/Header information
- Skills and categories
- Projects
- Experience and education
- Contact information

## Technologies

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Axios

**Backend:**
- Express.js
- PostgreSQL
- Prisma ORM
- CORS

## License

This project is open source and available under the MIT License.
