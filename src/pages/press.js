import React from "react";
import Footer from "../components/containers/Footer";
import Sien from './../components/containers/Sien'

export default function Press() {
  return (
    <div>
      <Sien />
      <div className="footer-page">
          <Footer/>
      </div>
    </div>
  );
}