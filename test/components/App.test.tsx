import { shallow } from "enzyme";
import * as React from "react";
import * as renderer from "react-test-renderer";
import { App } from "../../src/components/App";

describe("test", () => {
  it("Should contain div In app", () => {
    const wrapper = shallow(<App dispatch={() => null} />);
    expect(wrapper.contains(<div>In app</div>)).toBeTruthy();
  });

  it("Should match snapshot", () => {
    const tree = renderer.create(<App dispatch={() => null} />);
    expect(tree).toMatchSnapshot();
  });
});
