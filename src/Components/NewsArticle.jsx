import React from 'react'

// props is referring to newsArticleProps attribute of NewsArticle component in body component
const NewsArticle = ({ newsArticleProps }) => {

    // get headline/thumbnail from each current object
    const myHeadline = newsArticleProps.fields.headline;
    const myThumbnail = newsArticleProps.fields.thumbnail;
    // const myID = newsArticleProps.id;
    // console.log(myHeadline)
    // console.log(myThumbnail)

    return (
        // <div key={myID}>
        <div className='newsArticle'>
            {/* display headline/thumbnail */}
            {/* <img src={myThumbnail} alt="cant find img" /> */}
            <img thumbnailtestid="testMyThumbnail" src={myThumbnail} alt="cant find img" />
            <h2 headlinetestid="testMyHeadline">{myHeadline}</h2>
            {/* <h2 >{myHeadline}</h2> */}
            <figcaption>{myHeadline}</figcaption>
        </div>
    )
}

export default NewsArticle