import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<Render />);
    //screen.debug();
    //https://github.com/A11yance/aria-query#elements-to-roles
    //https://jestjs.io/docs/en/expect
    //screen.debug(screen.getByRole("heading"))
    expect(screen.getByRole("heading")).toBeTruthy();
  });
});
