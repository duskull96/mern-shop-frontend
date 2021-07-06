
const initialState = {
    catalog: [
        {
            id: 0,
            name: 0,
            price: 0,
            picture: 0,
            loading: true
        }
    ]
}

export const SET_CATALOG = 'SET_CATALOG'
export const FETCH_CATALOG = 'FETCH_CATALOG'

export default function catalogReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATALOG:
            return { ...state, catalog: action.payload }
        default:
            return state
    }
}

export const setCatalogPageCreator = payload => ({ type: SET_CATALOG, payload })
export const fetchCatalogPageCreator = () => ({ type: FETCH_CATALOG })