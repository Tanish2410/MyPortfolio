from fastapi import FastAPI

from app.routes.projects import router as projects_router
from app.routes.experience import router as experience_router
from app.routes.education import router as education_router
from app.routes.skills import router as skills_router

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(
    projects_router,
    prefix="/api"
)

app.include_router(
    experience_router,
    prefix="/api"
)

app.include_router(
    education_router,
    prefix="/api"
)

app.include_router(
    skills_router,
    prefix="/api"
)