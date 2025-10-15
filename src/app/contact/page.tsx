import Base from "../base.jsx";

export default function Contact() {
  return (
    <>
      <Base />
      <div className="contact">
        <center>
          <h1 className="subtitle"><strong>Contact Us:</strong></h1>
          <br />
          <p>
            <img src="/mail.png" alt="Mail" style={{ marginRight: "4px", borderRadius: "4px" }} />
          </p>
          <p className="info">
            <strong>Email:</strong> <a href="mailto:hello@silveroakdevelopment.co.uk">hello@silveroakdevelopment.co.uk</a> <br />
          </p>
          <br />
          <p>
            <img src="/call.png" alt="Phone" style={{ marginRight: "4px", borderRadius: "4px" }} />
          </p>
          <p className="info">
            <strong>Phone:</strong> <a href="tel:01344578990">01344 578990</a> <br />
          </p>
          <br />
          <h2 className="subtitle"><strong>Get your quote today!</strong></h2>
        </center>
      </div>
    </>
  );
}