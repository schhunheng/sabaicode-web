import React from 'react';
import { mount } from "enzyme";
import Contact from './../../components/presentations/contact';

describe("Contact Component", () => {
    let contact;
    beforeEach(() => {
        contact = mount(<Contact />);
    });

    test("check imageIcon source", () => {
        expect(contact.find("img").prop("src")).not.toEqual(null);
    });
    test("data contact", () => {
        expect(contact.find("span")).not.toBe(null);
    });
});