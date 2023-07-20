import React from 'react'

// props is referring to newsArticleProps attribute of NewsArticle component in body component
const NewsArticle = ({ newsArticleProps }) => {
    // get thumbnail/headline from each current object
    // const { id, thumbnail, headline } = newsArticleProps.fields;
    // const myID = newsArticleProps.fields.id;
    const myThumbnail = newsArticleProps.fields.thumbnail;
    const myHeadline = newsArticleProps.fields.headline;

    return (
        <div className='newsArticle'>
            {/* <div key={myID}>
            <img src={myThumbnail} alt="cant find img" />
            <h2 >{myHeadline}</h2> */}

            <img thumbnailtestid="testMyThumbnail" src={myThumbnail} alt="cant find img" />
            <figcaption>{myHeadline}</figcaption>
        </div>
    )
}

export default NewsArticle