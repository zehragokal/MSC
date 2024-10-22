import React, { useEffect } from "react";

const RegionalReps = () => {
  useEffect(() => {
    // Load the Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/p/DBWxn0Gu43E/?utm_source=ig_embed&amp;utm_campaign=loading"
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: 0,
        width: "99.375%",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href="https://www.instagram.com/p/DBWxn0Gu43E/?utm_source=ig_embed&amp;utm_campaign=loading"
          style={{
            background: "#FFFFFF",
            lineHeight: 0,
            padding: 0,
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* SVG and other elements here */}
          <div style={{ padding: "19% 0" }}></div>
          <div style={{ paddingTop: "8px" }}>
            <div
              style={{
                color: "#3897f0",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                fontWeight: 550,
                lineHeight: "18px",
              }}
            >
              View this post on Instagram
            </div>
          </div>
        </a>
        <p
          style={{
            color: "#c9c8cd",
            fontFamily: "Arial,sans-serif",
            fontSize: "14px",
            lineHeight: "17px",
            margin: "8px 0 0",
          }}
        >
          <a
            href="https://www.instagram.com/p/DBWxn0Gu43E/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{ color: "#c9c8cd", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            A post shared by Muslim Student Council (MSC) (@absoc_uk)
          </a>
        </p>
      </div>
    </blockquote>
  );
};

export default RegionalReps;
