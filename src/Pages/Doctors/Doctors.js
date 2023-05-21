import React from "react";
import doctor_info from "./doctor_info";
import DoctorModel from "./DoctorModel";
import colors from "./color.json";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Doctor.css";

function Doctor1(doctor_info) {
  return (
    <>
      <DoctorModel
        id={doctor_info.id}
        key={doctor_info.id}
        name={doctor_info.name}
        image={doctor_info.image}
        department={doctor_info.department}
        qualification={doctor_info.qualification}
        experience={doctor_info.experience}
        description={doctor_info.description}
        color={doctor_info.color}
      />
    </>
  );
}

function Doctor() {
  return (
    <div>
      <Header />
      <div className="doctor__main">
        <h1 className="doctor__name">A doctor is a person next to god.</h1>
        {/* <h1 className="ourDoctors">Our Doctors</h1> */}
        <dl className="dictionary">{doctor_info.map(Doctor1)}</dl>
      </div>

      <Footer />
    </div>
  );
}

export default Doctor;
