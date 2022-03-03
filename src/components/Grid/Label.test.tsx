import Label from "./Label";
import { Event } from "../../models/Event";
import { render } from "@testing-library/react";


describe('Grid test run', () => {

		// Test Event data for labels
		const testEvent1: Event = {
			id: 1,     
			title: "Welcome test",    
			address: "Lekplatsen 52",  
			date: "2021-05-20",      

		}
		const testEvent2: Event = {
			id: 7,     
			title: "Welcome test",    
			address: "Lekplatsen 52",  
			date: "2022-01-12",      

		}


	it('Render without errors', () => {

		const testEvent: Event = {
			id: 1,     
			title: "Test Test Test",    
			address: "Test Parken 50",  
			date: "2023-02-10",      

		}
		render(<Label event={testEvent} />)
	});


	// it('Render Label with correct chronological order', () => {


	// })
})