from fastapi import APIRouter

router = APIRouter()


@router.get("/skills")
def get_skills():
    return [
        {
            "id": 1,
            "name": "Python",
            "level": "Advanced"
        },
        {
            "id": 2,
            "name": "FastAPI",
            "level": "Intermediate"
        },
        {
            "id": 3,
            "name": "Docker",
            "level": "Intermediate"
        },
        {
            "id": 4,
            "name": "Kubernetes",
            "level": "Beginner"
        }
    ]