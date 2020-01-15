const initialState = {
    hello: "Hello",
    user: {},
    journal: {},
    pages: [],
    events: [],
    page: {},
    users: [],
    journals: [],
    userPages: []
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
                userPages: [...state.userPages, action.payload],
                page: action.payload
            }
        case 'DELETE_PAGE':
            let filteredPages = state.pages.filter(page => page.id !== action.payload)
            return {
                ...state,
                pages: filteredPages
            }
        case 'UPDATE_PAGE': 
            let pagesWOUpdatedPage = state.pages.filter(page => page.id !== action.payload.id)
            let pagesWithUpdatedPage = [...pagesWOUpdatedPage, action.payload]
            return {
                ...state,
                pages: pagesWithUpdatedPage
            }
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'GET_JOURNALS':
            return {
                ...state, 
                journals: action.payload 
            }
        case 'GET_USER_PAGES': 
            return {
                ...state,
                userPages: action.payload
            }
        default: 
            return state
    }
}

export default journalReducer
