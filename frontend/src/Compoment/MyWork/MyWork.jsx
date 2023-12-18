import React from "react";
import "./MyWork.css";

function MyWork() {
  return (
    <div id="mywork">
      <div className="container">
        <h1 className="sub_title">My Work</h1>
        <div className="work_list">
          <div className="work">
            <img src="assets/work-1.png" alt="" />
            <div className="layer">
              <h3>Text 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente explicabo quasi, cupiditate expedita animi non facilis
                est harum ducimus. Doloremque architecto sit culpa. Obcaecati,
                aliquid eum. Commodi est sit tenetur!
              </p>
              <a href="#">
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="assets/work-2.png" alt="" />
            <div className="layer">
              <h3>Text 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente explicabo quasi, cupiditate expedita animi non facilis
                est harum ducimus. Doloremque architecto sit culpa. Obcaecati,
                aliquid eum. Commodi est sit tenetur!
              </p>
              <a href="#">
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src="assets/work-3.png" alt="" />
            <div className="layer">
              <h3>Text 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Sapiente explicabo quasi, cupiditate expedita animi non facilis
                est harum ducimus. Doloremque architecto sit culpa. Obcaecati,
                aliquid eum. Commodi est sit tenetur!
              </p>
              <a href="#">
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">
          See more
        </a>
      </div>
    </div>
  );
}

export default MyWork;
