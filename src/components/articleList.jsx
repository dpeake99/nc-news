import {useEffect, useState} from 'react'
import {getArticlesByTopic} from '../utils/api'
import ArticleCard from './articleCard'
import SortBy from './sortBy'

const ArticleListByTopic = ({topic}) => {

    const [topicArticleItems, setTopicArticleItems] = useState([])
    const [sortedBy, setSortedBy] = useState("created_at")
    const [orderedBy, setOrderedBy] = useState("desc")
    const [isLoading, setIsLoading] = useState(true)
      
    useEffect(() => {
        setIsLoading(true)
        getArticlesByTopic(topic, sortedBy, orderedBy)
        .then((data) => {
                setTopicArticleItems(data);
                setIsLoading(false)
            })
    },[topic, sortedBy, orderedBy])
    
    if(isLoading) return <p>Loading Articles...</p>

    return (
        <div>
            <SortBy setSortedBy={setSortedBy} setOrderedBy={setOrderedBy} sortedBy={sortedBy} orderedBy={orderedBy}/>
            <label><h2>Today's {topic} articles</h2></label>
            <ul className = "lister">
                {topicArticleItems.map((articleItem) => {
                    return <ArticleCard key = {articleItem.article_id} article = {articleItem} />
                })}
            </ul>
        </div>
    )
}

export default ArticleListByTopic