import React from "react";
import { ReactDOM } from "react-dom";
import "./Doctor.css";

function DoctorModel(props) {
  return (
    <div className="container-grid ">
      <div
        className="Total-content"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: 20,
        }}
      >
        <div className="Image-file">
          <figure>
            <img className="Image" src={props.image} />
          </figure>
        </div>

        <div className="Desc-file">
          <h2 className="h2_class">
            <span className="layout" role="img">
              Specialist : {props.department}
            </span>
          </h2>
          <h3 className="depart h3_class">Name: {props.name}</h3>
          <h3 className="depart h3_class">Years of Experience: {props.experience}</h3>
          <h3 className="depart h3_class">Qualification: {props.qualification}</h3>
          <h3 className="h3_class">Description: {props.description}</h3>
        </div>
      </div>
    </div>
  );
}

export default DoctorModel;
