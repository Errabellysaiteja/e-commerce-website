import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About me'}>
      <div className="row aboutus">
        <div className="col-md-6">
        <img
  src="/images/about2.jpeg"
  alt="aboutus"
  style={{
    width: "65%", // Adjust the width to 100% to make it responsive
    maxWidth: "600px", // Limit the maximum width for better design
    height: "", // Maintain aspect ratio
    display: "block", // Center the image
    margin: "0 auto", // Add auto margin for centering
  }}
/>

        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT ME</h1>
          <p className="text-justify mt-2">
          Hello, and thank you for visiting! My name is Sai Teja,
           and I am an aspiring software engineer and full-stack developer. This e-commerce platform was developed
            as part of my learning journey in web development using the MERN stack.
          </p>
          <p className="text-justify mt-2">
            This project allowed me to explore real-world applications
             such as user authentication, product management, payment gateway integration, and responsive design. While this is a
              learning-based project, 
            I’ve put in the effort to create an intuitive and seamless user experience to simulate a professional e-commerce platform..
          </p>
          <p className="text-justify mt-2">
          I appreciate your interest in my work and welcome any feedback or suggestions for improvement.

Thank you for supporting my journey and being a part of my growth as a developer!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
