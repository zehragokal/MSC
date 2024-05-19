import React from "react";
import Navbar from "../Navbar";
import ImageCarousel from "../ImageCarousel";
import Footer from "../Footer";

const AboutUsPage = () => {
  return (
    <div className="page">
      <Navbar />
      <header className="App-header">About Us</header>
      <div class="container-fluid text-center body">
        <div class="row">
          <div class="col-sm-7 d-flex align-items-center">
            <ImageCarousel />
          </div>
          <div class="col-sm-5 d-flex align-items-center body-text">
            <div>
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "5%" }}>
            <h1>Who We Are</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div style={{ marginTop: "5%" }}>
            <h1>What We Do</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Praesent elementum facilisis leo vel fringilla est ullamcorper
              eget nulla. Augue lacus viverra vitae congue eu consequat ac
              felis. Lacus viverra vitae congue eu consequat ac. Lorem mollis
              aliquam ut porttitor leo a diam sollicitudin. Nisl suscipit
              adipiscing bibendum est ultricies integer quis auctor elit.
              Sollicitudin nibh sit amet commodo nulla facilisi. Faucibus in
              ornare quam viverra orci sagittis. Ut porttitor leo a diam
              sollicitudin tempor. Quam viverra orci sagittis eu volutpat odio.
              Nunc vel risus commodo viverra maecenas accumsan lacus vel
              facilisis. Risus feugiat in ante metus dictum at tempor commodo.
              Dolor magna eget est lorem ipsum dolor. At auctor urna nunc id
              cursus metus aliquam. Sit amet nulla facilisi morbi tempus iaculis
              urna. Vulputate enim nulla aliquet porttitor lacus luctus
              accumsan. Adipiscing tristique risus nec feugiat in. Dignissim
              enim sit amet venenatis urna cursus eget nunc.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
