import React, { useState } from "react";
import axios from "axios";

function CareerForm() {

  const [skills, setSkills] = useState("");
  const [career, setCareer] = useState("");

  const submitSkills = async () => {

    const response = await axios.post("http://127.0.0.1:8000/career", {
      skills: skills
    });

    setCareer(response.data.career_suggestion);
  };

  return (
    <div>
      <h2>Career Suggestion</h2>

      <input
        type="text"
        placeholder="Enter your skills"
        onChange={(e) => setSkills(e.target.value)}
      />

      <button onClick={submitSkills}>Get Career Suggestion</button>

      <p>{career}</p>
    </div>
  );
}

export default CareerForm;