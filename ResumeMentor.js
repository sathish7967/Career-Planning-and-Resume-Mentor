import React, { useState } from "react";
import axios from "axios";

function ResumeMentor() {

  const [resume, setResume] = useState("");
  const [tips, setTips] = useState([]);

  const reviewResume = async () => {

    const response = await axios.post("http://127.0.0.1:8000/resume-review", {
      resume_text: resume
    });

    setTips(response.data.suggestions);
  };

  return (
    <div>

      <h2>Resume Mentor</h2>

      <textarea
        rows="6"
        cols="50"
        placeholder="Paste your resume here"
        onChange={(e) => setResume(e.target.value)}
      />

      <br />

      <button onClick={reviewResume}>Review Resume</button>

      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>

    </div>
  );
}

export default ResumeMentor;