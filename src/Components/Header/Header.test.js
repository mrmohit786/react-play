import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  function setup() {
    return render(
      <Header title="My Title">
        <div>Children</div>
      </Header>
    );
  }

  it("render heading", () => {
    setup();
    expect(screen.getByText("React Playground")).toBeInTheDocument();
  });
});
