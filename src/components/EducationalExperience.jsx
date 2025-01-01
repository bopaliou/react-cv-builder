import React, { useState } from 'react';
import '../Styles/EducationalExperience.css';

const EducationalExperience = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [education, setEducation] = useState({
    schoolName: '',
    studyTitle: '',
    studyDate: "",
  });

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const toggleEdit = () => setIsEditing(true);

  return (
    <div className="educational-experience">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            School Name:
            <input
              type="text"
              name="schoolName"
              value={education.schoolName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Title of Study:
            <input
              type="text"
              name="studyTitle"
              value={education.studyTitle}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date of Study:
            <input
              type="date"
              name="studyDate"
              value={education.studyDate}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School Name: {education.schoolName}</p>
          <p>Title of Study: {education.studyTitle}</p>
          <p>Date of Study: {education.studyDate}</p>
          <button type="button" onClick={toggleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;
