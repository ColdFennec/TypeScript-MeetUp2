import CommentAdd from '../Comment/CommentAdd';
import { render, screen } from "@testing-library/react";



describe('Comment List Test', () => {

	it('Render without errors', () => {
		render(<CommentAdd people={[]} setPeople={() => {}}/>)
	});


	it("Render with button", () => {
		render(<CommentAdd people={[]} setPeople={() => {}}></CommentAdd>)
		screen.getByText(("Send Comment"))
	})

	it("Render with Input fields of Name and Comment", () => {
		render(<CommentAdd people={[]} setPeople={() => {}}></CommentAdd>)
		screen.getByPlaceholderText("Name")
		screen.getByPlaceholderText("Leave a comment!")
	})

})