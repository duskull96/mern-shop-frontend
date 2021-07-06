const initialState = {
    main: [
        {
            id: 0,
            alt: 0,
            picture: 0,
            content: 0,
            loading: true
        }
    ]
}

export const SET_MAIN = 'SET_MAIN'
export const FETCH_MAIN = 'FETCH_MAIN'

export default function mainPageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MAIN:
            return { ...state, main: action.payload }
        default:
            return state
    }
}

export const setMainPageCreator = payload => ({ type: SET_MAIN, payload })
export const fetchMainPageCreator = () => ({ type: FETCH_MAIN })