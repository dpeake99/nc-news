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