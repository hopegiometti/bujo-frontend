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
        default: 
            return state
    }
}

export default journalReducer
