import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsArticle from './NewsArticle';
import { Link, NavLink } from 'react-router-dom/';

const Body = () => {
    // state variable, state setter, initial value
    const [newsArticle, setNewsArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    // fetch news from URL
    const getNewsArticle = async () => {
        try {
            // successful, get data from server
            const response = await axios.get(process.env.REACT_APP_URL);
            // console.log(response) // all data
            console.log(response.data.response.results) // article array
            setNewsArticle(response.data.response.results);
            setIsLoading(false)
        }
        catch (error) {
            // unsuccessful, display error
            alert(`Error! URL not found!`);
            console.dir(error);
        }
    }

    // call function when app refreshes
    useEffect(() => {
        getNewsArticle();
    }, []);

    // copy/paste to new array
    const allNewsArticle = newsArticle.map(currentNewsArticle => {
        return (
            // console.log(currentNewsArticle),
            // save each object of array as prop (newsArticleProps), and pass to component (NewsArticle)
            // each child object must contain unique key as prop, when they are passed to component
            // link = no style, navlink = with styles
            // id = url

            <Link to={`/NewsArticleContent/${currentNewsArticle.id}`} key={currentNewsArticle.id}>
                {/* <p>{currentNewsArticle.id}</p> */}
                <NewsArticle newsArticleProps={currentNewsArticle} />
            </Link>
            // <NewsArticle newsArticleProps={currentNewsArticle} key={currentNewsArticle.id} />
        );
    })

    // html/components
    return (
        <div className="body">
            {isLoading ?
                <p>loading api</p> :
                allNewsArticle
            }
        </div>
    );
}

export default Body