import React from "react";
import Base from "./base.jsx";


export default function Home() {
  return (
    <>
      <Base />
      <div className="wrapper">
        <center>
          <div className="title">
            <strong>Silver Oak Property Development</strong>
          </div>
          <p className="info"><i> Residential Contractors & Renovation Specialists</i></p><br />
          <p className="info"> We are a team of experienced property consultants with a vision to make your dream property a reality.</p>
          <br />
          <br />
          <p className="subtitle"><strong>Testimonials</strong></p>
          <p className="quote"> &quot;Working with Silver Oak has been a pleasure. They understood my vision and worked with me to shape my home into what I wanted. Not only did they go above and beyond to make me happy but they added to my ideas and made the changes fit into our daily lives. I can&apos;t wait to get them back on board for my next project!&quot; </p>
          <br />
          <br />
          <p className="subtitle"><strong>Services</strong></p>
          <p className="info">We offer a range of services including:</p>
          <ul className="info">
            <li>Property Development Consultancy</li>
            <li>Property Maintenance</li>
            <li>Architectural Design</li>
          </ul>
        </center>
      </div>
    </>
  );
}
