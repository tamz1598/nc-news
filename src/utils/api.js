import axios from "axios";

const northcodersNC = axios.create({
    baseURL: 'https://be-nc-news-th.onrender.com/'
})


export const getArticles = () => {
    return northcodersNC
    .get('/api/articles')
    .then((response) => {
        return response.data
    })
    .catch((err) => console.log(err)) 
}

export const getArticlesById = (articleId) => {
    return northcodersNC
    .get('/api/articles')
    .then((response) => {
        return response.data
    })
    .catch((err) => console.log(err)) 
}

export const getUsers = () => {
    return northcodersNC
    .get('/api/users')
    .then((response) => {
        return response.data
    })
    .catch((err) => console.log(err)) 
}

export const getTopics = () => {
    return northcodersNC
    .get('/api/topics')
    .then((response) => {
        return response.data
    })
    .catch((err) => console.log(err))
 };