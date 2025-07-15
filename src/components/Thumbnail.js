import React from 'react';

function Thumbnail(props) {
    return (
        <div>
            <img src={props.article.thumbnail} />
        </div>
    )
}

export default Thumbnail;