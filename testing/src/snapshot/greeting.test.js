import { render } from "@testing-library/react";
import { greeting } from "./greeting";
test("renders greeting message", () => {
    const {container} = render(<greeting name="kush"/>);
    expect(container).toMatchSnapshot();
});