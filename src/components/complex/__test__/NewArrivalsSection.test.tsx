import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NewArrivalSection from "../NewArrivalSection";
import "@testing-library/jest-dom";

describe("NewArrivals section tests", () => {
  it("Testing rendering of ui", () => {
    render(
      <MemoryRouter>
        <NewArrivalSection />
      </MemoryRouter>,
    );
    expect(screen.getByText("New Arrival")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
    expect(screen.getAllByTestId("NewArrivalsProductCard")).toHaveLength(4);
  });
});
