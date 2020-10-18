import React from 'react';
import { mount } from 'enzyme';
import CourseComponent from './../../components/presentations/courseComponent';

describe("Course Component", () => {
    let courseComponent;
    beforeEach(() => {
        courseComponent = mount(<CourseComponent />);
    });
    test("check Title", () => {
        expect(courseComponent.find("#course-title")).not.toBe(null);
    });
    test("check url image", () => {
        expect(courseComponent.find("img").prop("src")).not.toEqual(null);
    });
    test("check subtitle", () => {
        expect(courseComponent.find("#course-subtitle")).not.toBe(null);
    })
});