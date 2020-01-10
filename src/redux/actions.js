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

export const deleteEvent = (eventToDelete) => {
  return {
    type: "DELETE_EVENT",
    payload: eventToDelete
  }
}

export const updateEvent = (eventToUpdate) => {
  return {
    type: "UPDATE_EVENT",
    payload: eventToUpdate
  }
}

export const setPage = (pageToDisplay) => {
  return {
    type: "SET_PAGE",
    payload: pageToDisplay
  }
}

export const addPage = (newPage) => {
  return {
    type: "ADD_PAGE",
    payload: newPage
  }
}
