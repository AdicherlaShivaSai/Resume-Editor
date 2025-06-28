from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/ai-enhance")
async def ai_enhance(data: dict):
    section = data.get("section")
    content = data.get("content")
    return {"enhanced": f"{content} (Improved by AI ✨)"}

@app.post("/save-resume")
async def save_resume(resume: dict):
    with open("resume_saved.json", "w") as f:
        json.dump(resume, f)
    return {"status": "saved"}