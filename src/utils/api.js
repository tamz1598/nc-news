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
    .get(`/api/articles/${articleId}`)
    .then((response) => {
        console.log(response)
        return response.data
    })
    .catch((err) => console.log(err)) 
}

export const getCommentsByArticleId = (articleId) => {
    return northcodersNC
    .get(`/api/articles/${articleId}/comments`)
    .then((response) => {
        console.log(response)
        return response.data
    })
    .catch((err) => console.log(err)) 
}

export const updateArticles = (articleId, voteIncrement) => {
    return northcodersNC
    .patch(`/api/articles/${articleId}`, {
        inc_votes: voteIncrement
    })
    .then((response) => {
        console.log(response)
        return response.data
    })
    .catch((err) => console.log(err)) 
}

export const postCommentByArticleId = (articleId, comment) => {
    return northcodersNC
    .post(`/api/articles/${articleId}/comments`, comment)
    .then((response) => {
        console.log("this is the response", response.data)
        return response.data
    })
    .catch((error) => {
        console.error("Error posting comment:", error);
        throw error; // Rethrow the error to propagate it to the caller
    }); 
}

export const deleteCommentById = (commentId) => {
    return northcodersNC.delete(`/api/comments/${commentId}`)
        .then(response => {
            // You might not need to return anything for a 204 response
            return response.data;
        })
        .catch(err => {
            console.error("Failed to delete comment:", err);
            throw err;
        });
};

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

export const getArticlesByTopic = (topic) => {
    return northcodersNC
    .get(`/api/articles?topics=${topic}`)
    .then((response) => {
        return response.data
    })
    .catch((err) => console.log(err))
};

export const getArticlesBySort = (sort_by, order) => {
    return northcodersNC
    .get(`/api/articles`, {
        params:{sort_by, order}
    })
    .then((response) => {
        return response.data
    })
    .catch((err) => console.log(err))
};

