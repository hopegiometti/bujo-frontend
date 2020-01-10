const initialState = {
    hello: "Hello",
    user: {},
    journal: {},
    pages: [],
    events: [],
    page: {}
}

const journalReducer = (state = initialState , action) => {
    switch(action.type){
        case 'SET_USER': 
            return {
                ...state,
                user: action.payload
            }
        case 'SET_JOURNAL': 
            return {
                ...state,
                journal: action.payload
            }
        case 'SET_PAGES': 
            return {
                ...state,
                pages: action.payload
            }
        case 'SET_EVENTS': 
            return {
                ...state,
                events: action.payload
            }
        case 'ADD_EVENT':
            let spreadedEvents = [...state.events, action.payload]
            return {
                ...state,
                events: spreadedEvents
            }
        case 'DELETE_EVENT':
            let filteredEvents = state.events.filter(event => event.id !== action.payload)
            return {
                ...state,
                events: filteredEvents
            }
        case 'UPDATE_EVENT':
            // console.log(action.payload.id)
            let filteredEventsTwo = state.events.filter(event => event.id !== action.payload.id)
            let updatedEvents = [...filteredEventsTwo, action.payload]
            return {
                ...state,
                events: updatedEvents
            }
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload
            }
        case 'ADD_PAGE':
            return {
                ...state,
                pages: [...state.pages, action.payload],
                page: action.payload
            }
        default: 
            return state
    }
}

export default journalReducer
