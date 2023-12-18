import React from "react";
import "./Contact.css";
import axios from "axios";

function Contact() {
  const downloadJsonFile = () => {
    axios({
      url: "http://localhost:5000/api/data",
      method: "GET",
      responseType: "blob",
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "data.json");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading the file:", error);
      });
  };
  return (
    <div id="contact">
      <div className="container">
        <div className="footer">
          <div className="contact">
            <h1 className="sub_title">Contact Me</h1>
            <p>
              <i className="fa-regular fa-envelope"></i> blabla@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> 02305648
            </p>
            <div className="social_icon">
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <button
              className="btn btn2"
              id="downloadButton"
              onClick={downloadJsonFile}
            >
              Download JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
