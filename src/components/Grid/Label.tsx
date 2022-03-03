import { Event } from '../../models/Event'
import {  useState } from "react";

import CommentList from '../Comment/CommentList';
import CommentAdd from '../Comment/CommentAdd';

interface Props {
  event: Event;
}
export interface IState{
  people:{
    name: string;
    comment: string;
  }[]
}



const Label = ({ event }: Props) => {


    const [people, setPeople] = useState<IState["people"]>([
    
  ])

  return (
    <section className="event-label">
      {/* Render event label */}
      <h2>{event.title}</h2>
      <h4>{event.address}</h4>
      <p className="date-box">{event.date}</p>

      {/* Render comments */}
      
      <CommentAdd people={people} setPeople={setPeople}/>
      <CommentList people={people} />
      

    </section>
  )

};

export default Label