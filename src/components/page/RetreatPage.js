import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import rameez from "../images/rameez.JPG";
import maryam from "../images/maryam.JPG";
import mscHands from "../images/mscHands.JPG";

const RetreatPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">Retreat</header>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm">
            <img
              src={rameez}
              style={{ width: "100%", maxWidth: "400px" }}
              alt="rameez"
            />
          </div>
          <div class="col-sm">
            <img
              src={maryam}
              style={{ width: "100%", maxWidth: "400px" }}
              alt="maryam"
            />
          </div>
          <div class="col-sm">
            <img
              src={mscHands}
              style={{ width: "100%", maxWidth: "400px" }}
              alt="funny"
            />
          </div>
        </div>
      </div>
      <div style={{ padding: "2%" }}>
        <h2>What is Retreat?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>What to Expect</h2>
        <p>
          Praesent elementum facilisis leo vel fringilla est ullamcorper eget
          nulla. Augue lacus viverra vitae congue eu consequat ac felis. Lacus
          viverra vitae congue eu consequat ac. Lorem mollis aliquam ut
          porttitor leo a diam sollicitudin. Nisl suscipit adipiscing bibendum
          est ultricies integer quis auctor elit. Sollicitudin nibh sit amet
          commodo nulla facilisi. Faucibus in ornare quam viverra orci sagittis.
          Ut porttitor leo a diam sollicitudin tempor. Quam viverra orci
          sagittis eu volutpat odio. Nunc vel risus commodo viverra maecenas
          accumsan lacus vel facilisis. Risus feugiat in ante metus dictum at
          tempor commodo. Dolor magna eget est lorem ipsum dolor. At auctor urna
          nunc id cursus metus aliquam. Sit amet nulla facilisi morbi tempus
          iaculis urna. Vulputate enim nulla aliquet porttitor lacus luctus
          accumsan. Adipiscing tristique risus nec feugiat in. Dignissim enim
          sit amet venenatis urna cursus eget nunc.
        </p>
        <h2>FAQs</h2>
        <p>Q1: Whats the difference between this and the Summit?</p>
        <p>
          <em>A1: The same but more fun you should come</em>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default RetreatPage;
