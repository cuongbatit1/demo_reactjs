import { render, screen } from "@testing-library/react";
import DrawerComponent from "../../component/DrawerComponent";

test("test renders DrawerComponent with open", () => {
  const { asFragment } = render(<DrawerComponent open={true} />);
});
