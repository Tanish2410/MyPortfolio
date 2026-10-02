from fastapi import APIRouter

router = APIRouter()


@router.get("/projects")
def get_projects():
    return [
        {
            "id": 1,
            "title": "Clippy",
            "description": "Hackathon project",
            "technologies": ["Python", "OpenAI"]
        }
    ]