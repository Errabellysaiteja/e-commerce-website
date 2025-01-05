import React from "react";
import Layout from "./../components/Layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout title={'Privacy policy'}>
      <div className="row privacypolicy">
        <div className="col-md-10 offset-md-1">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <p className="text-justify mt-4">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information when you use
            our e-commerce platform.
          </p>
          <p className="text-justify mt-4">
            We collect information to provide better services to our users,
            including identifying trends, personalizing your experience, and
            improving our products. We do not sell your personal data to third
            parties.
          </p>
          <p className="text-justify mt-4">
            By using our platform, you agree to the terms of this Privacy
            Policy. Please read it carefully, and contact us if you have any
            questions or concerns.
          </p>
          <p className="text-justify mt-4">
            For more detailed information, please refer to the full Privacy
            Policy documentation available on our website.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
