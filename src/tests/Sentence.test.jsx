import React from "react";
import { render } from "./test-utils/testing-library-utils";

import SentenceCreator from "../components/Body/SentenceCreator";
describe("SentenceCreator", () => {
  it("renders correctly on initial render", () => {
    const { getByText } = render(<SentenceCreator />);

    // Check if the component renders the expected text
    const noWordsSelectedText = getByText("No Words Selected");
    expect(noWordsSelectedText).toBeInTheDocument();

    // Check if all buttons are disabled
    const deleteButton = getByText("DELETE");
    const clearButton = getByText("CLEAR");
    const submitButton = getByText("SUBMIT");

    expect(deleteButton).toHaveClass("cursor-not-allowed");
    expect(clearButton).toHaveClass("cursor-not-allowed");
    expect(submitButton).toHaveClass("cursor-not-allowed");
  });
});
