import CommentList from '../Comment/CommentList';
import { render, screen } from "@testing-library/react";
import { IState as IProps } from '../Grid/Label';


describe('Comment List Test', () => {

	it('Render CommentList without errors', () => {
		render(<CommentList people={[]} />)
	});


	it('Render a test Comment', () => {
		const fakeComment: IProps = {
			people: [
				{
					name: 'John',
					comment: 'This event is fun!'
				}
			]
		}

		render(<CommentList people={fakeComment.people} />);
		expect(screen.getByText("John")).toBeInTheDocument();
		expect(screen.getByText("This event is fun!")).toBeInTheDocument();
	})

})