import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleArticle, updateVotes } from "../utils/api";
import dayjs from "dayjs";
import Comments from "./comments";


const SingleArticle = () => {
    const [currentArticle, setCurrentArticle] = useState({})
    const [articleVotes, setArticleVotes] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    let {article_id} = useParams()

    useEffect(() => {
        getSingleArticle(article_id)
        .then((data) => {
            console.log(data)
            setCurrentArticle(data.article);
            setArticleVotes(data.article.votes)
            setIsLoading(false);
        })
        .catch((err)=> {
            setIsLoading(false)
            setError({err})
        })
    },[article_id])

    const increaseVote = () => {
        setArticleVotes((currCount) => currCount + 1)
        updateVotes(1, article_id)
        .catch((err) => {
            setError({err})
        })
    }

    if(isLoading) return <p>Loading Article...</p>
    if(error) return (
        <div>
            <h1>Oops... something went wrong!</h1>
            <p>This article does not exist</p>
            <p><Link to="/">Return to all Articles</Link></p>
        </div>
    )
    
        return (
            <article className="article">
                <h2>{currentArticle.title}</h2>
                <h3>Written by: {currentArticle.author}</h3>
                <h4>{currentArticle.body}</h4>
                <p>Date published: {dayjs(currentArticle.created_at).format('DD/MM/YYYY HH:mm')}</p>
                <p>Votes: {articleVotes}</p>
                <button onClick={increaseVote}>Vote</button>
                <p>Comments: {currentArticle.comment_count}</p>
                <Comments articleId={article_id}/>
                <p><Link to="/articles">Return to all articles</Link></p>
            </article>      
        ) 
}

export default SingleArticle