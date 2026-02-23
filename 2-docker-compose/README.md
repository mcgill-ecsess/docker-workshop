# Activity 2: Docker Compose - Multi-service app

## Goal

Write a `docker-compose.yml` that runs both **frontend** and **backend** on different ports, plus a **database** service.

## Project structure

- `frontend/` — Vue/Vite app (port 3000)
- `backend/` — Express API on Bun (port 8000)
- `database` — PostgreSQL with persistent volume

## Docker workshop hints

- Use `ports` to expose services to the host (e.g. `"3000:80"` for frontend, `"8000:8000"` for backend)
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

- **Frontend** at http://localhost:3000
- **Backend** at http://localhost:8000
- **Database** (PostgreSQL) running with data persisted in a volume
