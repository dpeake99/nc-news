import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://be-portfolio-project.herokuapp.com/api"
})

export const getTopics = () => {
    return newsApi.get('/topics').then((res) => {
        return res.data
    })
}

export const getArticlesByTopic = (articleTopic, sortedBy, orderedBy) => {
return newsApi.get(`/articles`,{
    params: {
        topic: articleTopic,
        sort_by: sortedBy,
        order: orderedBy
    },
    
}).then((res) => {
    return res.data
    })
}

export const getSingleArticle = (articleId) => {
    return newsApi.get(`/articles/${articleId}`).then((res)=> {
        return res.data
    })
}

export const updateVotes = (votes, articleId) => {
    const patchMessage = {"inc_votes": votes}
    return newsApi.patch(`/articles/${articleId}`, patchMessage)
}

export const getArticleComments = (articleId) => {
    return newsApi.get(`/articles/${articleId}/comments`)
}

export const postNewComment = (articleId, comment, username) => {
    const postMessage = {"body": comment, "username": username}
    return newsApi.post(`/articles/${articleId}/comments`, postMessage)
}

export const deleteArticleComment = (commentId) => {
    return newsApi.delete(`/comments/${commentId}`)
}