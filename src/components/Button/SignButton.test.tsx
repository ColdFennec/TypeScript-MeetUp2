import SignButton from "./SignButton";
import { render } from "@testing-library/react";
import { configure, shallow} from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


configure({adapter: new Adapter()});
describe("Button test run", () => {

    it("Render Header with no errors", () => {

        render(<SignButton />);
    });

    it("Render with button text", () => {
        
        const wrapper = shallow(<SignButton />);

        const button = wrapper.find(".sign-button");

        expect(button.text()).toBe("Sign up Event")
    });
})