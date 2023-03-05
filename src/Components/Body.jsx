import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsArticle from './NewsArticle';

const Body = () => {
    // state variable, state setter, empty array as initial value
    const [newsArticle, setNewsArticle] = useState([]);

    // fetch news from URL
    const getNewsArticle = async () => {
        try {
            // successful, get data from server
            const response = await axios.get(process.env.REACT_APP_NewsArticleURL);
            // console.log(response) // all data
            // console.log(response.data.response.results) // array
            setNewsArticle(response.data.response.results);
        }
        catch (error) {
            // unsuccessful, display error
            alert(`Error! URL not found!`);
            // console.log(error);
            console.dir(error);
        }
    }

    // call function when app refreshes
    useEffect(() => {
        getNewsArticle();
    }, []);

    // copy/paste to new array
    // const allNewsArticle = newsArticle.map(currentNewsArticle => {
    //     // get headline/thumbnail from each current object
    //     const myHeadline = currentNewsArticle.fields.headline;
    //     const myThumbnail = currentNewsArticle.fields.thumbnail;
    //     const myID = currentNewsArticle.id;
    //     return (
    //         // child tags must have 1 parent tag
    //         <div newArticleKey={myID}>
    //             {/* display headline/thumbnail */}
    //             <img src={myThumbnail} alt="cant find img" />
    //             <h2>{myHeadline}</h2>
    //             <figcaption>{myHeadline}</figcaption>
    //         </div>
    //     )
    // })

    // copy/paste to new array
    const allNewsArticle = newsArticle.map(currentNewsArticle => {
        return (
            console.log(currentNewsArticle),
            // save each object of array as prop (newsArticleProps), and pass to component (NewsArticle)
            // each child object must contain unique key as prop, when they are passed to component
            < NewsArticle newsArticleProps={currentNewsArticle} key={currentNewsArticle.id} />
        );
    })

    // html/components
    return (
        <div className="body">
            {/* <img />my image */}
            {/* <p>my headlines</p> */}
            {allNewsArticle}
        </div >
    );
}

export default Body