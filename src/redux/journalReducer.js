const initialState = {
    hello: "Hello",
    user: {},
    journal: {},
    pages: [],
    events: [],
    page: {},
    users: [],
    journals: [],
    userPages: [],
    tasks: [],
    habits: [],
    streaks: [],
    items: []
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
        case 'GET_TASKS':
            return {
                ...state,
                tasks: action.payload
            }
        case 'ADD_TASK':
            let spreadedTasks = [...state.tasks, action.payload]
            return {
                ...state,
                tasks: spreadedTasks
            }
        case 'DELETE_TASK':
            let filteredTasks = state.tasks.filter(task => task.id !== action.payload)
            return {
                ...state,
                tasks: filteredTasks
            }
        case 'UPDATE_TASK':
            let filteredTasksTwo = state.tasks.filter(task => task.id !== action.payload.id)
            let updatedTasks = [...filteredTasksTwo, action.payload]
            return {
                ...state,
                tasks: updatedTasks
            }
        case 'GET_HABITS':
            return {
                ...state,
                habits: action.payload
            }
        case 'GET_STREAKS':
            let spreadedStreaks = [...state.streaks, action.payload]
            return {
                ...state,
                streaks: spreadedStreaks
            }
        case 'ADD_STREAK':
            let streaksWithNew = [...state.streaks, action.payload]
            return {
                ...state,
                streaks: streaksWithNew
            }
        case 'ADD_HABIT':
            let habitsWithNew = [...state.habits, action.payload]
            return {
                ...state,
                habits: habitsWithNew
            }
        case 'GET_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        case 'ADD_ITEM':
            let itemsWithNew = [...state.items, action.payload]
            return {
                ...state,
                items: itemsWithNew
            }
        case 'DELETE_ITEM':
            let filteredItems = state.items.filter(item => item.id !== action.payload)
            return {
                ...state,
                items: filteredItems
            }
        default: 
            return state
    }
}

export default journalReducer
