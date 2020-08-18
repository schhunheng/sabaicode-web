import React from "react";
import { mount } from "enzyme";
import HeaderCarousel from "./../components/presentations/headerCarousel";

describe("Header component ", () => {
  let header;
  beforeEach(() => {
    header = mount(<HeaderCarousel />);
  });

  test("check length of  image slide", () => {
    // console.log(header.debug());
     
    expect(header.find("img").length).toEqual(3);
  });
  test("isImage not null", () => {
    for (let i; i < header.find("img").length ; i++){
      expect(header.find("img").prop("src")[i]).not.toEqual(null);
    }
    
  })
});
