import {useEffect, useState} from 'react'
import { getArticles, getTopics } from '../utils/api'
import ArticleCard from './articleCard'

const ArticleList = () => {

    const [articleItems, setArticleItems] = useState([])
    const [articleTopics, setArticleTopics] = useState([])
    let filterChange = 0
    
    useEffect(() => {
        getArticles()
        .then((data) => {
                setArticleItems(data);
            })
        getTopics()
        .then((data) => {
            setArticleTopics(data.topics)
            console.log(articleTopics)
        })

    }, [filterChange])

    let handleTopicChange = (e) => {
        setArticleItems((currArticleItems) => {
            const newArticleItems = []
            currArticleItems.forEach(item => {
                if (e.target.value === ""){
                    newArticleItems.push(item)
                }
                if(item.topic === e.target.value){
                    newArticleItems.push(item)
                }
            })
            return newArticleItems
        })
    }
    
    return (
        <div>
            <select onChange={handleTopicChange}>
                <option value = ""> -- Select a Category -- </option>
                {articleTopics.map((topic => <option key = {topic.slug} value = {topic.slug}>{topic.slug}</option>))}
            </select>
            <label>Articles</label>
            <ul className = "lister">
                {articleItems.map((articleItem) => {
                    return <ArticleCard key = {articleItem.article_id} article = {articleItem} />
                })}
            </ul>
        </div>
    )

}

export default ArticleList