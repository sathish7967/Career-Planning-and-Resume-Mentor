from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Skills(BaseModel):
    skills: str

class Resume(BaseModel):
    resume_text: str


@app.post("/career")
def suggest_career(data: Skills):

    skill = data.skills.lower()

    if "python" in skill:
        career = "Python Developer / Data Scientist"
    elif "java" in skill:
        career = "Java Backend Developer"
    else:
        career = "Software Developer"

    return {"career_suggestion": career}


@app.post("/resume-review")
def resume_review(data: Resume):

    tips = []

    if len(data.resume_text) < 100:
        tips.append("Add more details about your experience")

    if "project" not in data.resume_text.lower():
        tips.append("Include project experience")

    if len(tips) == 0:
        tips.append("Resume looks good!")

    return {"suggestions": tips}