import Base from "../base.jsx";

export default function About() {
  return (
    <>
      <Base />
      <div className="wrapper">
        <center>
        <h1 className="subtitle"><strong>About Us</strong></h1>
        <p className="info"> We are a family run business dedicated to providing top-notch property consultation and construction services.
        </p>
        <br />
        <p className="info"> <strong>Our Mission:</strong> To deliver exceptional quality and reliable service in every project we undertake.
        </p>
        <br />
        <ul className="info">
          <li><strong>Transparency</strong></li> <img src="/search.png" alt="Transparent" style={{ marginLeft: "4px", borderRadius: "4px" }} />
          <li><strong>Quality</strong></li> <img src="/diamond.png" alt="Diamond" style={{ marginLeft: "4px", borderRadius: "4px" }} />
          <li><strong>Customer Satisfaction</strong></li> <img src="/stars_2.png" alt="Star" style={{ marginLeft: "4px", borderRadius: "4px" }} />
        </ul>
        <br />
        <p className="info"> With years of experience in the property development industry, we pride ourselves on our ability to turn your vision into reality. Whether you&apos;re looking to renovate your home or embark on a new construction project, Silver Oak Property Development is here to guide you every step of the way.
        </p>
        </center>
      </div>
    </>
  );
}
