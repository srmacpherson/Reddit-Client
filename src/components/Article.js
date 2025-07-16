import React from 'react';
import Thumbnail from './Thumbnail';
import { useSelector } from 'react-redux';


function Article() {
    const articles = useSelector(state => state.reddit.articles);

    return (
        <>
            {articles.map(article => (
                <article key={article.id}>
                    <a href={ "https://reddit.com" + article.permalink } target="_blank" rel="noopener noreferrer">
                        <h3>{article.title}</h3>
                        <div className="article-img">
                            <img src={article.thumbnail}/>
                        </div>
                    </a>
                    <p>Author: {article.author}</p>
                    <p>Score: {article.score}</p>
                    <p>Comments: {article.num_comments}</p>
                </article>
            ))}
        </>
    )
}

export default Article;
