from fastapi import APIRouter

router = APIRouter()


@router.get("/experience")
def get_experience():
    return [
        {
            "id": 1,
            "company": "GuruvaiSciences",
            "role": "AI Solutions Intern",
            "technologies": [
                "Python",
                "FastAPI",
                "Docker",
                "Kubernetes"
            ]
        }
    ]