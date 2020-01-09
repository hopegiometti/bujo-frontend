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
            let spreadEvents = [...state.events, action.payload]
            return {
                ...state,
                events: spreadEvents
            }
        default: 
            return state
    }
}

export default journalReducer
