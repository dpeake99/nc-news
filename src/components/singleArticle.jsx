import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleArticle, updateVotes } from "../utils/api";
import dayjs from "dayjs";
import Comments from "./comments";


const SingleArticle = () => {
    const [currentArticle, setCurrentArticle] = useState({})
    const [articleVotes, setArticleVotes] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    let {article_id} = useParams()

    useEffect(() => {
        getSingleArticle(article_id)
        .then((data) => {
            setCurrentArticle(data.article);
            setArticleVotes(data.article.votes)
            setIsLoading(false);
        })
        .catch((err)=> {
            setIsError(true)
        })
    },[article_id])

    const increaseVote = () => {
        setArticleVotes((currCount) => currCount + 1)
            updateVotes(1, article_id)
            .catch((err) => {
                setIsError(true)
            })
            
    }

    if(isLoading) return <p>Loading Article...</p>
    if(isError) return <p>Ooops...Something went wrong</p>
    
        return (
            <article className="article">
                <h2>{currentArticle.title}</h2>
                <h3>Written by: {currentArticle.author}</h3>
                <h4>{currentArticle.body}</h4>
                <p>Date published: {dayjs(currentArticle.created_at).format('DD/MM/YYYY HH:mm')}</p>
                <p>Votes: {articleVotes}</p>
                <button onClick={increaseVote}>Vote</button>
                <p>Comments: {currentArticle.comment_count}</p>
                <Comments articleId={article_id} setCurrentArticle={setCurrentArticle} />
                <p><Link to="/articles">Return to all articles</Link></p>
            </article>      
        ) 
}

export default SingleArticle