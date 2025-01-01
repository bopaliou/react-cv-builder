import React, { useState } from 'react';
import '../Styles/PracticalExperience.css';

const PracticalExperience = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [experience, setExperience] = useState({
    companyName: '',
    jobTitle: '',
    mainTasks: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const toggleEdit = () => setIsEditing(true);

  return (
    <div class="practical-experience">
    {isEditing ? (
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={experience.companyName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            value={experience.jobTitle}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Main Tasks:
          <textarea
            name="mainTasks"
            value={experience.mainTasks}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    ) : (
      <div>
        <p>Company Name: {experience.companyName}</p>
        <p>Job Title: {experience.jobTitle}</p>
        <p>Main Tasks: {experience.mainTasks}</p>
        <p>Start Date: {experience.startDate}</p>
        <p>End Date: {experience.endDate}</p>
        <button type="button" onClick={toggleEdit}>
          Edit
        </button>
      </div>
    )}
  </div>
);
};

export default PracticalExperience;

