import SignButton from "./SignButton";
import { render, screen} from "@testing-library/react";
import { configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


configure({adapter: new Adapter()});
describe("Button test run", () => {

    it("Render Header with no errors", () => {

        render(<SignButton />);
    });

    it("When onclick, the button text changes", () => {
        render(<SignButton />);

        expect(screen.getByText("You signed up event")).toBeInTheDocument();
    })


})