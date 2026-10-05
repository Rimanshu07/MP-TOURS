# MP Tours Backend

This project is the initial standalone backend foundation for MP Tours.

## Purpose

The backend is intentionally limited to project initialization and architecture setup. It does not yet implement business APIs, database access, authentication, payment flows, or any feature-specific logic.

## Architecture

The project follows an HMVC-style module-based Node.js + Express structure:

```text
src/
├── app.js
├── server.js
├── config/
├── middlewares/
├── modules/
│   └── (reserved for future feature modules)
├── routes/
├── utils/
└── ...
```

The intended future pattern is:

```text
src/modules/
└── tours/
    ├── tours.controller.js
    ├── tours.service.js
    ├── tours.model.js
    ├── tours.routes.js
    └── tours.validation.js
```

The expected request flow is:

```text
Request
  ↓
Route
  ↓
Controller
  ↓
Service / Business Logic
  ↓
Model / Data Access
  ↓
Database
```

This keeps request handling, business logic, and persistence concerns separated as the project grows.

## Current status

- Express foundation configured
- API root and health route ready
- HMVC-ready module structure prepared
- Environment variables supported
- Database not connected
- Authentication not implemented
- Business modules not created yet

## Scripts

```bash
npm install
npm run dev
npm start
npm test
```

## Health check

```bash
curl http://localhost:5000/api/health
```
