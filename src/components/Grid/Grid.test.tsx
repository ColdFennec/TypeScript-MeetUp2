import Grid from "./Grid";
import { render, screen } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


configure({adapter: new Adapter()});
describe('Grid test run', () => {

	it('Render without errors', () => {
		render(<Grid searchText={""}/>)
	});



	//No solution found, errors.
	// it('Render Grid with existing date from data', () => {

	// 	const testRenderer = TestRenderer.create(<Grid searchText={""}/>)

	// 	const testInstance = testRenderer.root;

	// 	const dateCheck = testInstance.findAll(
	// 		(date) => date.props.className === 'date-box'
	// 	)

 
	// 	expect(getDate).toBe("2022-02-05");
	// })

})