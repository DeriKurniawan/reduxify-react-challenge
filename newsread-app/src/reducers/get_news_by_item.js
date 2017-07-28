const initialState = {
    listArticles: []
}

const getNewsByItem = (state = initialState, action) => {
    switch(action.type){
        case 'GET_NEWS_ITEM':
            //const newListArticles = [action.payload.newListArticles]
            return { listArticles: action.payload.articleItems }
        default:
            return state
    }
}

export default getNewsByItem