import {useEffect, useState} from 'react'
import {getArticlesByTopic} from '../utils/api'
import ArticleCard from './articleCard'
import SortBy from './sortBy'

const ArticleListByTopic = (topic) => {

    const [topicArticleItems, setTopicArticleItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
      
    useEffect(() => {
        setIsLoading(true)
        getArticlesByTopic(topic.topic)
        .then((data) => {
                setTopicArticleItems(data);
                setIsLoading(false)
            })
    },[topic.topic])
    
    if(isLoading) return <p>Loading Articles...</p>

    return (
        <div>
            <SortBy />
            <label><h2>Today's {topic.topic} articles</h2></label>
            <ul className = "lister">
                {topicArticleItems.map((articleItem) => {
                    return <ArticleCard key = {articleItem.article_id} article = {articleItem} />
                })}
            </ul>
        </div>
    )

}

export default ArticleListByTopic