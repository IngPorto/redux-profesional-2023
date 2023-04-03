import { render } from "@testing-library/react";
import Searcher from "@comp/UI/searcher";

test("verify Searcher component render", () => {
  const component = render(<Searcher />);
  console.log(component);
});
