import React, { useState } from 'react';
import UploadPage from './components/UploadPage';
import EditorPage from './components/EditorPage';

function App() {
  const [resume, setResume] = useState(null);

  return (
    <div>
      {!resume ? (
        <UploadPage setResume={setResume} />
      ) : (
        <EditorPage resume={resume} setResume={setResume} />
      )}
    </div>
  );
}

export default App;