from fastapi import APIRouter

router = APIRouter()


@router.get("/education") 
def get_education():
    return [
        {
            "id": 1,
            "institution": "Don Mills Collegiate Institute",
            "degree": "High School Diploma",
            "year": 2024
        },
        {
            "id": 2,
            "institution": "University of Waterloo",
            "degree": "Bachelor of Mathematics",
            "year": 2029
        }
    ]