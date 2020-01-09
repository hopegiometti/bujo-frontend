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