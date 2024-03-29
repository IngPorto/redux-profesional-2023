import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Searcher from "../Searcher";

test("verify Searcher component render", () => {
  const component = render(<Searcher />);
  expect(component.container).toBeVisible();
  component.getByPlaceholderText("Buscar...");

  component.debug();
});
