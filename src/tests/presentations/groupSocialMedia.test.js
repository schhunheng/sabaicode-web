import React from 'react';
import { mount } from 'enzyme';
import GroupSocailMedia from './../../components/presentations/groupSocialMedia';

describe("Check Group Social Media Icons", () => {
    let groupSocialMedia;
    beforeEach(() => {
        groupSocialMedia = mount(<GroupSocailMedia />);
    });
    test("check all image url icon social media component", () => {
        for (let i; i < groupSocialMedia.find("img").length ; i++){
            expect(groupSocialMedia.find("img").prop("src")[i]).not.toEqual(null);
          }
    });
})