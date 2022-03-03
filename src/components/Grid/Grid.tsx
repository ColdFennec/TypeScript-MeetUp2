import Label from './Label';
import { eventList } from '../data/eventList';
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../models/store"

// const Grid = () => {

//   const searchString = useSelector((state: RootState) => state.searchString)
//   const events = useSelector((state: RootState) => state.createEvent)

//   const sortedEvents = [...events].sort((first, second) => {
// 		if (first.date < second.date){
// 			return -1
// 		} else if (first.date > second.date){
// 			return 1
// 		} else {
// 			return 0
// 		}
// 	})

//   const filteredData = sortedEvents.filter(event => event.title.toLowerCase().includes(searchString.toLowerCase()))

	// const [filteredData, setFilteredEvents] = useState([...sortedEvents]);
  // useEffect(() => {
  //  if(searchText){
  //   const searchFilter = filteredData.filter(event=> (event.title.toLowerCase().includes(searchText.toLowerCase()) ))
  //   setFilteredEvents([...searchFilter])
  //  }else{
  //    setFilteredEvents([...eventList])
  //  }
    
  // }, [searchText])

interface Props {
  searchText: string,
}


const Grid: React.FC<Props> = ({searchText}) => {
  

    const sortedEvents = [...eventList].sort((first, second) => {
		if (first.date > second.date){
			return -1
		} else if (first.date < second.date){
			return 1
		} else {
			return 0
		}
	})

  const filteredData = sortedEvents.filter(event => event.title.toLowerCase().includes(searchText.toLowerCase()))

	
	return (
		<main className="event-grid">

			{filteredData.map(event => (
				<Label key={event.date} event={event} />
			))}
		</main>
	)
}

export default Grid