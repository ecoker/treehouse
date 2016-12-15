import * as HomeActions from 'actions/Home'

let initialState = {
    homes: []
}

function Home(state = initialState, action) {
    switch (action.type) {
        case CustomerActions.SET_HOMES:
            return {
                ...state,
                homes: action.payload
            }
        default:
            return state
    }
}

export default Home