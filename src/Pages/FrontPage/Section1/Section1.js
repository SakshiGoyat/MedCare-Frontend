import React from "react";
import "./Section1.css";
// import ME from "/images/doctor.png";
import { SiAsciidoctor } from "react-icons/si";
import { FaComments } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
// import { BsPersonFillCheck } from "react-icons/bs";
// import { CheckIcon } from "@chakra-ui/icons";
export default function Section1() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <SiAsciidoctor className="about__icon" />
              <h5>A+ Doctors</h5>
              <small>Best doctors from all over India</small>
            </div>
            <div className="about__card">
              <AiFillMedicineBox className="about__icon" />
              <h5>Consultation</h5>
              <small>24*7 consulation available</small>
            </div>
            <div className="about__card">
              <FaComments className="about__icon" />
              <h5>Chatting</h5>
              <small>Chat with doctors anytime</small>
            </div>
          </div>

          {/* <h1>Insiant appointment with Doctors.<span>Guaranteed</span></h1>
                    <div className="points">
                        <CheckIcon/>
                        <h1>1000 Varified doctors</h1>
                    </div>
                    <div className="points" >
                        <CheckIcon/>
                        <h1>1K+ Patient recommendations</h1>
                    </div>
                    <div className="points">
                        <CheckIcon/>
                        <h1>3K Patients/year</h1>
                    </div>
                    <a href="#contact" className="button btn btn-primary">Find me the doctor</a>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. 
                    
                    </p> */}
        </div>
        {/* <img src={ME} alt="About image" /> */}
      </div>
    </section>
  );
}
