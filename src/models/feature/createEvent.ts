import { createReducer, createAction } from '@reduxjs/toolkit'
import { Event } from '../Event'
import { eventList } from '../../components/data/eventList'

const addEvent = createAction<Event>('add Event')

const actions = {
	addEvent
}


const initialState = eventList

const reducer = createReducer(initialState, {
	[addEvent.toString()]: (state, action) => [ ...state, action.payload ]
})


export { actions, reducer }