import {useEffect, useState} from 'react'
import { getArticles } from '../utils/api'
import ArticleCard from './articleCard'
import SortBy from './sortBy'

const ArticleList = ({sortedBy, setSortedBy, orderedBy, setOrderedBy}) => {

    const [articleItems, setArticleItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getArticles(sortedBy, orderedBy)
        .then((data) => {
                setArticleItems(data)
                setIsLoading(false);
            })
    }, [sortedBy, orderedBy])
    
    if(isLoading) return <p>Loading Articles...</p>

    return (
        <div>
            <SortBy setSortedBy={setSortedBy} setOrderedBy={setOrderedBy} sortedBy={sortedBy} orderedBy={orderedBy}/>
            <label><h2>Today's articles</h2></label>
            <ul className = "lister">
                {articleItems.map((articleItem) => {
                    return <ArticleCard key = {articleItem.article_id} article = {articleItem} />
                })}
            </ul>
        </div>
    )

}

export default ArticleList