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
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    fetchExperiences();
  }, [id]);

  return (
    <div className="container">
      <h1 className="sub_title">My Services</h1>
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
          <div>
            <div>
              <h3>Name: {user.name}</h3>
              <h3>Email: {user.email}</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                eveniet illum facere magnam dolorum sapiente architecto tempora
                eum, deleniti rem cumque nisi neque cupiditate modi, doloremque
                commodi odit id ratione?
              </p>
            </div>
          </div>
        </div>
        <div className="data-item">
          <h2 className="data-title">Projects</h2>
          <div>
            {projects.map((project, index) => (
              <div key={index}>
                <h2>Title: {project.title}</h2>
                <p>Description: {project.desc}</p>
                <p>Tags: {project.tags}</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  eveniet illum facere magnam dolorum sapiente architecto
                  tempora eum, deleniti rem cumque nisi neque cupiditate modi,
                  doloremque commodi odit id ratione?
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="data-item">
          <h2 className="data-title">Experiences</h2>
          <div>
            {experiences.map((experice, index) => (
              <div key={index}>
                <h2>Title:{experice.title}</h2>
                <p>Description: {experice.desc}</p>
                <p>About: {experice.about}</p>
                <p>Tags: {experice.tags}</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  eveniet illum facere magnam dolorum sapiente architecto
                  tempora eum, deleniti rem cumque nisi neque cupiditate modi,
                  doloremque commodi odit id ratione?
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
