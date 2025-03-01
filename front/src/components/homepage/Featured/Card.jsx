import React from "react";
import "./Card.css";
import img2 from "../../../assets/img2.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <p
                className="back-text"
                style={{ fontSize: "14px", marginBottom: "3px" }}
              >
                01
              </p>
              <p
                className="back-text1"
                style={{ fontSize: "20px", marginTop: "10px" }}
              >
                A Italian
              </p>
            </div>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <img src={img2} alt="" />
          </div>

          <div className="front-content">
            <small className="badge">Pasta</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>Spaguetti Bolognese</strong>
                </p>
                <svg
                  fill-rule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* ... */}
                </svg>
              </div>
              <p className="card-footer" style={{ fontSize: "12px" }}>
                30 Mins &nbsp; | &nbsp; 1 Serving
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
