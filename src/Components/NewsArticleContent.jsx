import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const NewsArticleContent = () => {
    // get each article id, for http get request
    const { id } = useParams();
    console.log(id);

    const [newsArticleContent, setNewsArticleContent] = useState([]);
    const getNewsArticleContent = async () => {
        try {
            // https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=de619234-cc34-4dc7-baaf-562385ca4a0c
            const response = await axios.get(process.env.REACT_APP_URL);
            // const response = await axios.get(`https://content.guardianapis.com/{id}?show-fields=byline,thumbnail,headline,bodyText&api-key=de619234-cc34-4dc7-baaf-562385ca4a0c`);
            // console.log(response) // all data
            console.log(response.data.response.results) // array
            setNewsArticleContent(response.data.response.results);
            // setNewsArticleContent(response);
        }
        catch (error) {
            console.dir(error)
        }
    }
    useEffect(() => {
        getNewsArticleContent()
    }, [id]);

    const allNewsArticleContent = newsArticleContent.map(currentNewsArticleContent => {
        // console.log(currentNewsArticleContent)
        // console.log({ id })

        const myThumbnail = currentNewsArticleContent.fields.thumbnail;
        const myHeadline = currentNewsArticleContent.fields.headline;
        const myWebUrl = currentNewsArticleContent.webUrl;
        const myWebPublicationDate = currentNewsArticleContent.webPublicationDate;
        const myID = currentNewsArticleContent.id;

        return (
            <div key={currentNewsArticleContent.id}>
                <img src={myThumbnail} alt={myHeadline} />
                <p>{myHeadline}</p>
                <p>{myWebUrl}</p>
                <p>{myWebPublicationDate}</p>
                <p>{myID}</p>
            </div>
        )
    })

    // const allNewsArticleContent = () => {
    //     return (
    //         <div key={id}>
    //             <img src={myThumbnail} alt={myHeadline} />
    //             <p>{myHeadline}</p>
    //             <p>{myWebUrl}</p>
    //             <p>{myWebPublicationDate}</p>
    //             <p>{myID}</p>
    //         </div>
    //     )
    // }

    return (
        <div>
            {allNewsArticleContent}
        </div>
    )
}

export default NewsArticleContent