import { combineReducers } from 'redux'
import GetNews from './get_news'
import GetNewsByItems from './get_news_by_item'

export default combineReducers({
    stateNews: GetNews,
    stateNewsByItem: GetNewsByItems
})