import React from 'react';
import { useSelector } from 'react-redux';

function Thumbnail() {

    const articles = useSelector(state => state.reddit.articles);
    

    return (
        <>
        {console.log(articles)}
        <img src={articles.thumbnail}/>
        </>
    );
}

export default Thumbnail;