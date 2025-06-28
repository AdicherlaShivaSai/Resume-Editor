# Resume Editor

A simple full-stack web-based Resume Editor built using **React.js** and **FastAPI**.

## ✨ Features

- Upload and mock-parse resumes (.pdf/.docx simulated)
- Edit resume sections (name, summary, education, experience, skills)
- Enhance each section with mock AI
- Save resume to backend
- Download final resume as JSON

## 🧠 Tech Stack

- **Frontend:** React.js (Vite), Axios
- **Backend:** FastAPI (Python), Uvicorn
- **Styling:** Basic CSS

## 🛠 Project Structure

```
resume-editor/
├── frontend/       # React app (UI)
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── style.css
│   └── index.html
├── backend/        # FastAPI app (API server)
│   ├── main.py
│   └── requirements.txt
```

## 🚀 Getting Started

### 🔧 Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate       # or source venv/bin/activate for bash
pip install -r requirements.txt
uvicorn main:app --reload
```

- Runs at: `http://localhost:8000`

### 🌐 Frontend Setup (React + Vite)

```bash
cd frontend
npm install
npm run start
```

- Runs at: `http://localhost:5173`

## 📄 License

This project is for educational and demonstration purposes only.