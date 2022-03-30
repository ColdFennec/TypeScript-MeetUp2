import React from "react";
import {IState as IProps} from "../Grid/Label";




const commentList: React.FC<IProps> = ({ people }) => {
  const renderComment = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li key={Math.random()} className="comment-person">
          <h4 className="comment-name">
            {person.name}
          </h4>
          <p className="comment-note">
            {person.comment}
          </p>
        </li>
      )
    })
  }
	return (
		
    
    <div className="comment-List">
      <ul className="comment-u-list">{renderComment()}</ul>
		</div>
	)
}

export default commentList