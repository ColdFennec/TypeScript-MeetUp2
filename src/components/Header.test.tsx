import Header from "./Header";
import { render } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


configure({adapter: new Adapter()});
describe("Header test run", () => {

    it("Render Header with no errors", () => {
        //Render Header with no errors or crash
        render(<Header searchText="" setSearchText={() => {}}/>);
    });

    it("Render Header with existing inputfield && empty string", () => {
        render(<Header searchText="" setSearchText={() =>{}}></Header>)

        const section = shallow(<Header searchText="" setSearchText={() =>{}}/>)

        //Define input exist
        const input = section.find("input");
        expect(input.exists()).toBe(true);

        //Define value empty string
        const value = input.render().val();
        expect(value).toBe("");

    })

})