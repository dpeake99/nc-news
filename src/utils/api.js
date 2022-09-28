import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://be-portfolio-project.herokuapp.com/api"
})
export const getArticles = (sortedBy, orderedBy) => {
    return newsApi.get(`/articles/?sort_by=${sortedBy}&order=${orderedBy}`).then((res) => {
        return res.data
    })
}

export const getTopics = () => {
    return newsApi.get('/topics').then((res) => {
        return res.data
    })
}

export const getArticlesByTopic = (topic, sortedBy, orderedBy) => {
    return newsApi.get(`/articles?topic=${topic}&sort_by=${sortedBy}&order=${orderedBy}`).then((res) => {
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
    console.log("article=",articleId, "comment=", comment,"username=", username)
    const postMessage = {"body": comment, "username": username}
    return newsApi.post(`/articles/${articleId}/comments`, postMessage)
}