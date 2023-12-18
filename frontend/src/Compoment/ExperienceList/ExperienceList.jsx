import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ExperienceList.css";

const ExperienceList = () => {
  const [user, setUser] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [id, setId] = useState("?id=1");

  const handleId = (e) => {
    e.preventDefault();
    setId("?id=2");
  };
  const handleId2 = (e) => {
    e.preventDefault();
    setId("?id=1");
  };

  useEffect(() => {
    const env = process.env.REACT_APP_URL;
    console.log(env);
    const fetchExperiences = async () => {
      try {
        const response = await axios.get(`${env}portfolio/${id}`);
        setUser(response.data.user);
        setProjects(response.data.projects);
        setExperiences(response.data.experiences);
        console.log("proj", projects);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    fetchExperiences();
  }, [id]);

  return (
    <div className="container">
      <div>
        <button className="btn btn2" onClick={handleId2}>
          John
        </button>
        <button className="btn btn2" onClick={handleId}>
          Smith
        </button>
      </div>
      <div className="data-container">
        <div className="data-item">
          <h2 className="data-title">User</h2>
          <ul>
            <li>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
            </li>
          </ul>
        </div>
        <div className="data-item">
          <h2 className="data-title">Projects</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="data-item">
          <h2 className="data-title">Experiences</h2>
          <ul>
            {experiences.map((experice, index) => (
              <li key={index}>
                <h3>{experice.title}</h3>
                <p>{experice.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
