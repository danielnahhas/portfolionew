import React, { useState } from "react";
import "./About.css";

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabname) => {
    setActiveTab(tabname);
  };

  const renderTabContent = (tabId) => {
    return activeTab === tabId
      ? "tab_contents active_tab"
      : "tab_contents hidden";
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about_1">
            <img src="assets/user.png" alt="user" />
          </div>
          <div className="about_2">
            <h1 className="sub_title">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              iusto quam odit voluptatum eveniet libero cumque amet. Quas
              excepturi perferendis similique adipisci aperiam, eaque obcaecati
              laudantium, dolorum ut, quasi corporis.
            </p>
            <div className="tab_titles">
              <p
                className={`tab_links ${
                  activeTab === "skills" ? "active_link" : ""
                }`}
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab_links ${
                  activeTab === "experience" ? "active_link" : ""
                }`}
                onClick={() => openTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab_links ${
                  activeTab === "education" ? "active_link" : ""
                }`}
                onClick={() => openTab("education")}
              >
                Education
              </p>
            </div>
            <div className={renderTabContent("skills")} id="skills">

            </div>
            <div className={renderTabContent("experience")} id="experience">

            </div>
            <div className={renderTabContent("education")} id="education">

              <ul>
                <li>
                  <span>golo golo golo 1</span>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  <span>golo golo golo 2</span>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  <span>golo golo golo 3</span>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;