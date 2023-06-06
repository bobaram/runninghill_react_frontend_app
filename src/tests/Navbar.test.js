import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  test("renders the navbar with correct links and toggles the dropdown menu", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Check if the website title is rendered
    const websiteTitle = screen.getByText(/Runninghill/i);
    expect(websiteTitle).toBeInTheDocument();

    // Check if the initial dropdown menu is hidden
    const dropdownMenu = screen.queryByTestId("dropdown");
    expect(dropdownMenu).toHaveClass("hidden");

    // Toggle the dropdown menu
    const toggleButton = screen.getByRole("button");
    userEvent.click(toggleButton);

    // Check if the dropdown menu is now visible
    expect(dropdownMenu).toHaveStyle({ display: "block" });

    // Check if the "Sentences" link is rendered
    const sentencesLink = screen.getByTestId("dropdown-sentences");
    expect(sentencesLink).toBeInTheDocument();

    // Check if the "Words" link is rendered
    const wordsLink = screen.getByTestId("dropdown-words");
    expect(wordsLink).toBeInTheDocument();
  });
});
