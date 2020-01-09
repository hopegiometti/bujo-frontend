export const setUser = (user) => {
    return {
      type: "SET_USER",
      payload: user
    }
}

export const setJournal = (journal) => {
    return {
      type: "SET_JOURNAL",
      payload: journal
    }
}

export const setPages = (pages) => {
    return {
      type: "SET_PAGES",
      payload: pages
    }
}

export const setEvents = (events) => {
    return {
      type: "SET_EVENTS",
      payload: events
    }
}

export const addEvent = (newEvent) => {
    return {
        type: "ADD_EVENT",
        payload: newEvent
    }
}