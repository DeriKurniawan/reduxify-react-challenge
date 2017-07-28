import axios from 'axios'

export const getNews = (newsArticles) => {
    return {
        type: 'GET_NEWS',
        payload: {
            articles: newsArticles
        }
    }
}

export const getNewsByItem = (newsItemList) => {
    return {
        type: 'GET_NEWS_ITEM',
        payload: {
            articleItems: newsItemList
        }
    }
}

export const getNewsAsync = () => {
    return (dispatch, getState) => {
        let url = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=beb2f163c5bb43e38c5ae0e00d06ec8f'
        axios.get(url)
        .then((response) => {
            return dispatch(getNews(response.data.articles))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const getNewsByItemAsync = (item) => {
    console.log('-----------', item)
    return (dispatch, getState) => {
        let url = `https://newsapi.org/v1/articles?source=${item}&sortBy=top&apiKey=beb2f163c5bb43e38c5ae0e00d06ec8f`
        axios.get(url)
        .then( (response) => {
            return dispatch(getNewsByItem(response.data.articles))
        })
        .catch( (err) => {
            console.log(err)
        })
    }
}