import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [reviewers, setReviewers] = useState([]);
  const [registrationData, setRegistrationData] = useState([]);
  const [selectedReviewer, setSelectedReviewer] = useState({});
  const [registeredProjects, setRegisteredProjects] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState({});

  // Fetch projects and reviewers on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allprojects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    const fetchReviewers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allreviewers');
        setReviewers(response.data);
      } catch (error) {
        console.error('Error fetching reviewers:', error);
      }
    };

    fetchProjects();
    fetchReviewers();
  }, []);

  const handleRegister = async (projectCode) => {
    const selectedReviewerUser = selectedReviewer[projectCode];
    const uploadedFile = uploadedFiles[projectCode];

    if (!uploadedFile) {
      alert('Please upload a file before registering.');
      return;
    }

    if (selectedReviewerUser) {
      const formData = new FormData();
      formData.append('file', uploadedFile);
      formData.append('projectCode', projectCode);
      formData.append('reviewer', selectedReviewerUser);
      formData.append('susername', localStorage.getItem('loggedInUser'));

      try {
        const response = await axios.post('http://localhost:8080/addprojectreview', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        alert(`Registered for ${projectCode} with reviewer ${selectedReviewerUser}`);
        setRegistrationData([...registrationData, { projectCode, reviewer: selectedReviewerUser }]);
        setRegisteredProjects([...registeredProjects, projectCode]);
        console.log('Registration successful:', response.data);
      } catch (error) {
        console.error('Error during registration:', error);
      }
    } else {
      alert('Please select a reviewer before registering.');
    }
  };

  const loggedInUser = localStorage.getItem('loggedInUser');

  return (
    <div className="register-container">
      <h1>Peer Review for Project</h1>
      <h2>Welcome, {loggedInUser ? loggedInUser : 'Guest'}</h2>

      <table>
        <thead>
          <tr>
            <th>Project Code</th>
            <th>Project Name</th>
            <th>Select Reviewer</th>
            <th>Upload File</th>
            <th>Register</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.projectCode}>
              <td>{project.projectCode}</td>
              <td>{project.projectName}</td>
              <td>
                <select
                  onChange={(e) => {
                    setSelectedReviewer({
                      ...selectedReviewer,
                      [project.projectCode]: e.target.value,
                    });
                  }}
                  disabled={registeredProjects.includes(project.projectCode)}
                >
                  <option value="">Select Reviewer</option>
                  {reviewers.map((reviewer) => (
                    <option key={reviewer.username} value={reviewer.username}>
                      {reviewer.username}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="file"
                  onChange={(e) => {
                    setUploadedFiles({
                      ...uploadedFiles,
                      [project.projectCode]: e.target.files[0],
                    });
                  }}
                  disabled={registeredProjects.includes(project.projectCode)}
                />
              </td>
              <td>
                <button
                  onClick={() => handleRegister(project.projectCode)}
                  disabled={registeredProjects.includes(project.projectCode)}
                >
                  {registeredProjects.includes(project.projectCode)
                    ? 'Registered'
                    : 'Register'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .register-container {
          padding: 20px;
          max-width: 800px;
          margin: 80px auto;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          background-color: #fff;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th, td {
          padding: 8px;
          text-align: left;
          border: 1px solid #ccc;
        }
        th {
          background-color: #f4f4f4;
        }
        button {
          padding: 10px 15px;
          background-color: #4b8da2;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button[disabled] {
          background-color: #ccc;
          cursor: not-allowed;
        }
        button:hover:not([disabled]) {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
