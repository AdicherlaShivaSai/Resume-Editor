import React, { useState } from 'react';
import axios from 'axios';

function EditorPage({ resume, setResume }) {
  const [data, setData] = useState(resume);

  const enhanceSection = async (sectionKey) => {
    const content = data[sectionKey];
    const payload = {
      section: sectionKey,
      content: typeof content === 'string' ? content : JSON.stringify(content)
    };
    const res = await axios.post('http://localhost:8000/ai-enhance', payload);
    const enhanced = res.data.enhanced;
    setData(prev => ({ ...prev, [sectionKey]: enhanced }));
  };

  const handleSave = async () => {
    await axios.post('http://localhost:8000/save-resume', data);
    alert("Resume saved!");
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.json';
    link.click();
  };

  return (
    <div>
      <h2>Edit Resume</h2>
      {Object.keys(data).map(key => (
        <div key={key} style={{ marginBottom: '1rem' }}>
          <h4>{key}</h4>
          <textarea
            rows={4}
            style={{ width: '100%' }}
            value={typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key], null, 2)}
            onChange={e => setData(prev => ({ ...prev, [key]: e.target.value }))}
          />
          <button onClick={() => enhanceSection(key)}>Enhance with AI</button>
        </div>
      ))}
      <button onClick={handleSave}>Save Resume</button>
      <button onClick={handleDownload}>Download JSON</button>
    </div>
  );
}

export default EditorPage;