import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-body-tertiary text-center p-0 m-0">
      <div
        className="container-fluid p-4 pb-1"
        style={{
          backgroundColor: "#0c223f",
        }}
      >
        <div
          className="contact-us pb-3"
          style={{
            color: "#FFFFFF",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "2",
          }}
        >
          <strong style={{ fontWeight: "bold" }}>Contact Us</strong>
          <br />
          <a
            href="mailto:secretary@themsc.co.uk"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563b4")}
            onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
          >
            secretary@themsc.co.uk
          </a>
          <br />
          <i
            className="fa fa-instagram fa-lg"
            style={{ paddingRight: "15px" }}
            aria-hidden="true"
          ></i>
          <a
            href="https://www.instagram.com/absoc_uk"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#2563b4")}
            onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
          >
            @absoc_uk
          </a>
        </div>
        <section className="mb-3">
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/MSCUK/?locale=en_GB"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/absoc?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="https://www.youtube.com/user/MuslimStudentCouncil"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/absoc_uk"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/company/muslim-student-council/about/"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "#113059",
          color: "#FFFFFF",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "12px",
        }}
      >
        © 2024 Muslim Student Council
      </div>
    </footer>
  );
};
export default Footer;
