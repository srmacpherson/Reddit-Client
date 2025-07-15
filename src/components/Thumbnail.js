import React from 'react';

function Thumbnail(props) {
    let imageUrl = '';

    if (
        props.article.preview &&
        props.article.preview.images &&
        props.article.preview.images[0] &&
        props.article.preview.images[0].source &&
        props.article.preview.images[0].source.url
    ) {
        imageUrl = props.article.preview.images[0].source.url.replace(/&amp;/g, '&');
    } else {
        imageUrl = props.article.thumbnail;
    }

    return (
        <div className="thumbnail">
            <img src={imageUrl} alt="" />
        </div>
    );
}

export default Thumbnail;