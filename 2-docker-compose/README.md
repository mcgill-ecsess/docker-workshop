# Activity 2: Docker Compose - Multi-service app

## Goal

Write a `docker-compose.yml` that runs both **frontend** and **backend** on different ports, plus a **database** service.

## Project structure

- `frontend/` — SvelteKit app (port 5173)
- `backend/` — Express API on Bun (port 8080)
- `database` — PostgreSQL with persistent volume

## Docker workshop hints

- Use `ports` to expose services to the host (e.g. `"5173:5173"` for frontend, `"8080:8080"` for backend)
- Add a `database` service using the official `postgres` image
- Use `volumes` to persist database data across container restarts
- Use `depends_on` so backend starts after the database
- Build & run:

```sh
# Build and start all services:
docker compose up --build

# Or run in detached mode:
docker compose up -d --build
```

## Expected result

- **Frontend** at http://localhost:5173
- **Backend** at http://localhost:8080
- **Database** (PostgreSQL) running with data persisted in a volume
