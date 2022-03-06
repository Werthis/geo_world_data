import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";

describe("Text check", () => {
  it("checking first label text", async () => {
    render(<Navbar />);
    const firstLabelElement = screen.getByText(/Create new app/i);
    expect(firstLabelElement).toBeInTheDocument();
  });
});
