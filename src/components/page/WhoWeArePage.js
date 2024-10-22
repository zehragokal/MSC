import React from "react";
import Navbar from "../Navbar";
import ImageCarousel from "../ImageCarousel";
import Footer from "../Footer";
import ExecComm from "../ExecComm";
import salaam from "../images/salaam.png";
import RegionalReps from "../RegionalReps";

const WhoWeArePage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">Who We Are</header>
      <img
        src={salaam}
        style={{
          display: "block",
          margin: "40px auto 0",
          width: "100%",
          maxWidth: "400px",
        }}
        alt="salaam"
      />
      <div className="container-fluid text-center body">
        <div className="row">
          <div className="col-sm-7 d-flex align-items-center">
            <ImageCarousel />
          </div>
          <div className="col-sm-5 d-flex align-items-center body-text">
            <div>
              <h1 style={{ marginTop: "10px" }}>Our Purpose</h1>
              <p>
                To serve Allah by using the teachings of the Qur’an and
                Ahlul-Bayt to facilitate self-development within British Muslim
                student communities, as they explore questions of faith and
                religious identity...
              </p>
              <div
                style={{
                  height: "2px", // Set the height of the line
                  backgroundColor: "rgb(217, 193, 255)", // Set the color of the line
                  margin: "8%", // Add some margin for spacing
                }}
              />
              <h1>Our Vision</h1>
              <p>
                The MSC envisions a united, supportive network of Muslim
                students that are religiously educated, spiritually grounded,
                academically supported and actively engaged.
              </p>
              <p>
                They will be well-equipped to deal with the challenges presented
                by British society and motivated to contribute towards the
                Muslim community at large.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "5%" }}>
            <h1>Aims & Objectives</h1>
            <div className="container text-center" style={{ color: "#0c223f" }}>
              <div className="row">
                <div
                  className="col aims-objectives-cards"
                  style={{
                    backgroundColor: "rgb(217, 193, 255)",
                    padding: "25px",
                    margin: "5px",
                    borderRadius: "15px",
                    minWidth: "200px",
                  }}
                >
                  <h5>EDUCATION</h5>
                  <i
                    class="fa fa-graduation-cap fa-5x"
                    aria-hidden="true"
                    style={{ margin: "10%" }}
                  ></i>
                  <p>
                    Promote Islamic values, beliefs and codes of conduct to
                    ABSoc members and the wider student community, based on the
                    teachings of the Qur’an and Ahlul-Bayt.
                  </p>
                </div>
                <div
                  className="col aims-objectives-cards"
                  style={{
                    backgroundColor: "#c3c1f2",
                    padding: "25px",
                    margin: "5px",
                    borderRadius: "15px",
                    minWidth: "200px",
                  }}
                >
                  <h5>SELF DEVELOPMENT</h5>
                  <i
                    class="fa fa-line-chart fa-5x"
                    aria-hidden="true"
                    style={{ margin: "10%" }}
                  ></i>
                  <p>
                    Facilitate the spiritual, academic, intellectual, political
                    and professional development of Muslim students in line with
                    the teachings of the Qur’an and Ahlul-Bayt.
                  </p>
                </div>
                <div
                  className="col aims-objectives-cards"
                  style={{
                    backgroundColor: "#c1ccf2",
                    padding: "25px",
                    margin: "5px",
                    borderRadius: "15px",
                    minWidth: "200px",
                  }}
                >
                  <h5>COMMUNITY</h5>
                  <i
                    class="fa fa-users fa-5x"
                    aria-hidden="true"
                    style={{ margin: "10%" }}
                  ></i>
                  <p>
                    Build an interconnected community of faith- driven Muslim
                    students by creating high- quality opportunities for the
                    development of brotherhood and sisterhood.
                  </p>
                </div>
                <div
                  className="col aims-objectives-cards"
                  style={{
                    backgroundColor: "#c1d6f2",
                    padding: "25px",
                    margin: "5px",
                    borderRadius: "15px",
                    minWidth: "200px",
                  }}
                >
                  <h5>MATERIAL SUPPORT</h5>
                  <i
                    class="fa fa-handshake-o fa-5x"
                    aria-hidden="true"
                    style={{ margin: "10%" }}
                  ></i>
                  <p>
                    Aid in establishing ABSocs and empowering existing ones
                    through material support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "5%" }}>
            <h1>How We Can Help You</h1>
            <p>Do we still want this section?</p>
          </div>
          <div style={{ marginTop: "5%" }}>
            <h1>Meet The Committee</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="container text-center"
                style={{ color: "#0c223f" }}
              >
                <div className="row">
                  <div className="col">
                    <ExecComm />
                  </div>
                  <div className="col">
                    <RegionalReps />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhoWeArePage;
