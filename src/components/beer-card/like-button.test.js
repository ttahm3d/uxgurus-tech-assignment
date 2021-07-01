import React from "react";
import { shallow } from "enzyme";
import Like from "./like-button";

describe("Tests for Like Button", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Like onClick={mockCallBack}>Ok!</Like>);
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
