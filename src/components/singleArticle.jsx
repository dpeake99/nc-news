import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleArticle, updateVotes } from "../utils/api";
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
    },[])

    const increaseVoteCount = () => {
        console.log(articleVotes)
        setArticleVotes((currCount) => currCount + 1)
        console.log(articleVotes)
    }

    const IncreaseVote = () => {
            increaseVoteCount()
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
                <p>Date published: {currentArticle.created_at}</p>
                <p>Votes: {articleVotes}</p>
                <button onClick={IncreaseVote}>Vote</button>
                <p>Comments: {currentArticle.comment_count}</p>
                <p><Link to="/articles">Return to all articles</Link></p>
                <Comments articleId={article_id} />
            </article>      
        ) 
}

export default SingleArticle