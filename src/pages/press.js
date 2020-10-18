import React from "react";
import FooterHome from "../components/containers/FooterHome";
import Sien from './../components/containers/Sien'

export default function Press() {
  return (
    <div>
      <Sien />
      <div className="footer-page">
          <FooterHome/>
      </div>
    </div>
  );
}