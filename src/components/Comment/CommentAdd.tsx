import React, { useState } from "react"
import { IState as Props } from "../Grid/Label";





interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<{
    name: string;
    comment: string;
  }[]>>;
}


const CommentAdd: React.FC<IProps> = ({ people, setPeople}) => {


  const [input, setInput] =  useState({
    name: "",
    comment: ""
  })


  const handleChange = (
    change: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({...input, [change.target.name]: change.target.value,
    })
  }

  const handleClick = (): void => {

    setPeople([
      ...people,
      {
        name: input.name,
        comment: input.comment
      },
    ])

    setInput({
      name: "",
      comment: "",
    });
  }


	return (
		<div className="comment-Add">
            
      <input 
        type="text"
        placeholder="Name"
        className="commentAdd-name"
        value={input.name}
        onChange={handleChange}
        name="name"
      />

      <textarea
        placeholder="Leave a comment!"
        className="commentAdd-comment"
        value={input.comment}
        onChange={handleChange}
        name="comment"
      />

      <button className="commentAdd-button" onClick={handleClick}>
        Send Comment
      </button>
		</div>
	)
}

export default CommentAdd