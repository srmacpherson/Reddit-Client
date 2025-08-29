import React from 'react';
import Thumbnail from './Thumbnail';

function Article(props) {
    return (
        <article>
            <a 
                href={ "https://reddit.com" + props.article.permalink } target="_blank" rel="noreferrer">
                    <h3>{props.article.title}</h3>
                
                <div className="article-img">
                    <Thumbnail article={props.article} />
                </div>
            </a>
            <p className='preview'>
                {props.article.selftext ? props.article.selftext.split(' ').slice(0, 10).join(' ') + '...' : ''}
            </p>
            <div className='extras'>
                <p>
                    Author: <a href={`https://www.reddit.com/user/${props.article.author}`}>{props.article.author}</a>
                </p>
                <p>Score: {props.article.score}</p>
                <p>Comments: {props.article.num_comments}</p>
            </div>
        </article>
    )
}

export default Article;