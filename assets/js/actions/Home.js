export const SET_HOMES = 'SET_HOMES';
export const setHomes = (homes) => {
    return {
        type: SET_HOMES,
        payload: homes
    }
}

/* -------------------------- */
/* WE MAY USE THESE LATER.... */
export const ADD_HOME = 'ADD_HOME';
export const adHome = (home) => {
    return {
        type: ADD_HOME,
        payload: home
    }
}

export const UPDATE_HOME = 'UPDATE_HOME';
export const updatHomes = (home) => {
    return {
        type: UPDATE_HOME,
        payload: home
    }
}

export const REMOVE_HOME = 'REMOVE_HOME';
export const removHomes = (home) => {
    return {
        type: REMOVE_HOME,
        payload: home
    }
}