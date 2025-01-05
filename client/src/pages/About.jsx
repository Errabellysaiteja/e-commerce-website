import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About us'}>
      <div className="row aboutus">
        <div className="col-md-6">
          <img
            src="/images/aboutus.jpeg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            Welcome to our E-commerce platform! We are committed to providing
            you with the best shopping experience, offering a wide range of
            high-quality products to meet your needs. 
          </p>
          <p className="text-justify mt-2">
            Our mission is to ensure customer satisfaction through reliable
            services, excellent support, and a seamless user experience. We
            value your trust and aim to exceed your expectations at every step.
          </p>
          <p className="text-justify mt-2">
            Thank you for choosing us as your preferred shopping destination.
            Let us make your journey enjoyable and rewarding!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
