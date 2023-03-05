import axios from 'axios'

// for testing purposes
export const getRequest = async () => {
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