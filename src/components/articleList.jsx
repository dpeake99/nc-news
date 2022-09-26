import {useEffect, useState} from 'react'
import { getArticles } from '../utils/api'
import ArticleCard from './articleCard'

const ArticleList = () => {

    const [articleItems, setArticleItems] = useState([])
    
    useEffect(() => {
        getArticles()
        .then((data) => {
                setArticleItems(data);
            })
    }, [])
    
    return (
        <div>
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