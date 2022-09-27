import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://be-portfolio-project.herokuapp.com/api"
})
export const getArticles = () => {
    return newsApi.get('/articles').then((res) => {
        return res.data
    })
}

export const getTopics = () => {
    return newsApi.get('/topics').then((res) => {
        return res.data
    })
}

export const getArticlesByTopic = (topic) => {
    return newsApi.get(`/articles?topic=${topic}`).then((res) => {
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