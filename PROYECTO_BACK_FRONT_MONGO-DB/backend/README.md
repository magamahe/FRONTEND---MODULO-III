# Users API (Express + TypeScript + MongoDB)

### Run locally
1. Copy `.env.example` to `.env` and set `MONGO_URI`.
2. Install dependencies:
   ```
   cd backend
   npm install
   ```
3. Start dev server:
   ```
   npm run dev
   ```
4. (Optional) Seed data:
   ```
   npm run seed
   ```

API base: `http://localhost:4000/api/users`

Endpoints:
- GET `/` health
- GET `/api/users` list
- GET `/api/users/:id` get by id
- POST `/api/users` create {name,email,age,phone}
- PUT `/api/users/:id`
- DELETE `/api/users/:id`
- GET `/api/users/search?name=...`
- GET `/api/users/sort?order=asc|desc`
- GET `/api/users/min`
- GET `/api/users/max`
- GET `/api/users/stats`
