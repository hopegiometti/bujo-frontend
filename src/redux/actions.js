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

export const deletePage = (pageToDelete) => {
  return {
    type: "DELETE_PAGE",
    payload: pageToDelete
  }
}

export const updatePage = (pageToUpdate) => {
  return {
    type: "UPDATE_PAGE",
    payload: pageToUpdate
  }
}

export const getUsers = (allUsers) => {
  return {
    type: "GET_USERS",
    payload: allUsers
  }
}

export const getJournals = (allJournals) => {
  return {
    type: "GET_JOURNALS",
    payload: allJournals
  }
}

export const getUserPages = (userPages) => {
  return {
    type: "GET_USER_PAGES",
    payload: userPages
  }
}

export const getTasks = (tasks) => {
  return {
    type: "GET_TASKS",
    payload: tasks
  }
}

export const addTask = (newTask) => {
  return {
    type: "ADD_TASK",
    payload: newTask
  }
}

export const deleteTask = (taskToDelete) => {
  return {
    type: "DELETE_TASK",
    payload: taskToDelete
  }
}

export const updateTask = (taskToUpdate) => {
  return {
    type: "UPDATE_TASK",
    payload: taskToUpdate
  }
}