import Card from "@comp/UI/card";
import { render } from "@testing-library/react";

test("", () => {
    const testCard = {
        name: "Blastoy", 
        img: "", 
        description: "The best"
    }
  render(<Card {...testCard} />);
});
