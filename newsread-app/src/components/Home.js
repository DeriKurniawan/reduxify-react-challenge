import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNewsAsync } from '../actions/index'

import 'semantic-ui-css/semantic.css'
import 'semantic-ui-css/semantic.js'

const styles = {
    container: {
        paddingLeft: 50,
        paddingTop: 60
    }
}

class Home extends Component {
    componentDidMount () {
        let { props } = this
        props.getListNews()
    }

    render () {
        const { props } = this
        return (
            <div className="ui fluid container" style={styles.container} >
                <div className="ui cards">
                { props.articles.map ( (article, index) => {
                return <div key={index} className="ui card">
                        <div className="image">
                            <img src={article.urlToImage} alt="..."/>
                        </div>
                        <div className="content">
                            <a className="header" href={article.url}>{article.author}</a>
                            <div className="meta">
                                <span className="date">Published in {article.publishedAt}</span>
                            </div>
                            <div className="description">
                                {article.title}
                            </div>
                        </div>
                        <div className="extra content">
                            <a href={article.url}><i className="newspaper icon"></i>Read Now</a>
                        </div>
                    </div>
                })}    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.stateNews.articles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListNews: () => dispatch(getNewsAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)