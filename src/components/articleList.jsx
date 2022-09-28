import {useEffect, useState} from 'react'
import { getArticles } from '../utils/api'
import ArticleCard from './articleCard'
import SortBy from './sortBy'

const ArticleList = () => {

    const [articleItems, setArticleItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getArticles()
        .then((data) => {
                setArticleItems(data)
                setIsLoading(false);
            })
    }, [])
    
    if(isLoading) return <p>Loading Articles...</p>

    return (
        <div>
            <SortBy />
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