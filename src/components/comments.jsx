import { getArticleComments } from "../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./commentCard";
import { NewCommentForm } from "./newCommentForm";

const Comments = (articleId) => {

    const [articleComments, setArticleComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticleComments(articleId.articleId)
        .then((data) => {
                setArticleComments(data.data)
                setIsLoading(false);
            })
    }, [articleId.articleId])
    
    if(isLoading) return <p>Loading Comments...</p>

    return (
        <div>
            <label><h2>Article Comments</h2></label>
            <ul className = "lister">
                {articleComments.map((articleComment) => {
                    return <CommentCard key = {articleComment.comment_id} comment = {articleComment} />
                })}
            </ul>
            <NewCommentForm articleId = {articleId.articleId} />
        </div>
    )


}

export default Comments