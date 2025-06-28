import React from 'react';

const dummyResume = {
  name: "Shivasai Adicherla",
  summary: "Recent graduate passionate about software development.",
  education: [
    { degree: "B.Tech in ECE", college: "CMR College", year: 2023 }
  ],
  experience: [
    { role: "Intern", company: "XYZ Corp", desc: "Worked on full-stack projects." }
  ],
  skills: ["C++", "React", "FastAPI"]
};

function UploadPage({ setResume }) {
  const handleUpload = () => {
    setResume(dummyResume);
  };

  return (
    <div>
      <h2>Upload Resume (.pdf/.docx)</h2>
      <button onClick={handleUpload}>Mock Upload</button>
    </div>
  );
}

export default UploadPage;