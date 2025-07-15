import React from 'react';
import Thumbnail from './Thumbnail';

function Article(props) {
    return (
        <article>
            <a href={ "https://reddit.com" + props.article.permalink } target="_blank">
                <h3>{props.article.title}</h3>
            </a>
            <Thumbnail article={props.article} />
            <p>Author: {props.article.author}</p>
            <p>Score: {props.article.score}</p>
            <p>Comments: {props.article.num_comments}</p>
        </article>
    )
}

export default Article;