import { render } from "@testing-library/react";
import { SentenceProvider } from "../../components/context/Context";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: SentenceProvider, ...options });

export * from "@testing-library/react";

export { renderWithContext as render };
