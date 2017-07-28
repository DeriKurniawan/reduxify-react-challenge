const initialState = {
    articles: []
}

const getNewsReducer = (state=initialState, action) => {
    switch(action.type){
        case 'GET_NEWS':
            return { articles: action.payload.articles }
        default:
            return state
    }
}

export default getNewsReducer