import * as React from "react";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { App } from "../../src/components/App";
import { logTestSaga } from "../../src/store/modules/test/actions";
import { container } from "../setUp";

describe("test", () => {
  it("Should test first render", () => {
    // Assemble
    const dispatch = jest.fn(
      (): any => {
        return null;
      }
    );

    // Act
    act(() => {
      ReactDOM.render(<App dispatch={dispatch} />, container);
    });

    // Assert
    const div = container.querySelector("div");
    expect(div.textContent).toBe("In app");
    expect(dispatch).toHaveBeenCalledWith(logTestSaga("from App"));
  });

  it("Should test onClick event", () => {
    // Act
    act(() => {
      ReactDOM.render(<App dispatch={() => null} />, container);
    });
    const button = container.querySelector("button");

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    // Assert
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Text changed");
  });
});
