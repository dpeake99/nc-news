import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleArticle } from "../utils/api";


const SingleArticle = () => {

    const [currentArticle, setCurrentArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    let {article_id} = useParams()

    useEffect(() => {
        getSingleArticle(article_id)
        .then((data) => {
            setCurrentArticle(data.article);
            setIsLoading(false);
        })
    })

    if(isLoading) return <p>Loading Article...</p>
    
        return (
            <article className="article">
                <h2>{currentArticle.title}</h2>
                <h3>Written by: {currentArticle.author}</h3>
                <h4>{currentArticle.body}</h4>
                <p>Date published: {currentArticle.created_at}</p>
                <p>Votes: {currentArticle.votes}</p>
                <p>Comments: {currentArticle.comment_count}</p>
                    <p><Link to="/articles">Return to all articles</Link></p>
            </article>      
            ) 
}

export default SingleArticle