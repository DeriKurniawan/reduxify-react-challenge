import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNewsByItemAsync } from '../actions/index'

import 'semantic-ui-css/semantic.css'
import 'semantic-ui-css/semantic.js'

const styles = {
    bottomNav: {
        paddingLeft: 500,
        backgroundColor: 'rgba(245, 213, 49, 0.8)'
    },
    container: {
        paddingLeft: 70,
        paddingTop: 60
    }
}

class Category extends Component {
    constructor () {
        super()
        this.state = {
            default: 'bbc-news'
        }
    }

    componentDidMount () {
        this.props.getNewsItem(this.state.default)
    }

    render () {
        //debugger
        return (
        <div>
            <div className="ui fluid container" style={styles.container}>
                <div className="ui cards">
                { this.props.articles.map( (article, index) => {
                return <div className="ui card" key={index}>
                        <div className="image">
                            <img src={article.urlToImage} alt=".." />
                        </div>
                        <div className="content">
                            <a className="header">{article.author}</a>
                            <div className="meta">
                                <span className="date">Joined in {article.publishedAt}</span>
                            </div>
                            <div className="description">
                                {article.title}
                            </div>
                        </div>
                        <div className="extra content">
                            <a href={article.url}><i className="newspaper icon"></i>Get Read</a>
                        </div>
                    </div>
                    })}
                </div>
            </div>
            <div>
                <div className="ui labeled icon secondary pointing bottom fixed menu" style={styles.bottomNav}>
                    <a className="item" onClick={ () => this.props.getNewsItem('bbc-news') }><i className="behance icon"></i>BBC</a>
                    <a className="item" onClick={ () => this.props.getNewsItem('cnn') }><i className="contao icon"></i>CNN</a>
                    <a className="item" onClick={ () => this.props.getNewsItem('reddit-r-all') }><i className="reddit alien icon"></i>Reddit</a>
                    <a className="item" onClick={ () => this.props.getNewsItem('google-news') }><i className="google icon"></i>BBC</a>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.stateNewsByItem.listArticles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNewsItem: (item) => dispatch(getNewsByItemAsync(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)