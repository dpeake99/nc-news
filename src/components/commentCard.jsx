import CardContent from '@mui/material/CardContent';
import dayjs from "dayjs";
import { useEffect, useState } from 'react';
import { deleteArticleComment,getArticleComments } from '../utils/api';
const CommentCard = ({comment, setArticleComments, articleId, setIsLoading}) => {

    const [commentToDelete, setCommentToDelete] = useState(0)

        useEffect(() => {
            if (commentToDelete !== 0){
                setIsLoading(true)
                deleteArticleComment(commentToDelete)
                .then((data) => {
                    getArticleComments(articleId)
                    .then((data) => {
                        setArticleComments(data.data)
                        setIsLoading(false);
                    })
                })
            }
        })

    return(
        <div className = "commentCard">
        <CardContent>
        <h3 className="item-name">
          {comment.author}
        </h3>
        <h4>{comment.body}</h4>
        <p>{dayjs(comment.created_at).format('DD/MM/YYYY HH:mm')}</p>
        <p>Votes: {comment.votes}</p>
      </CardContent>
      <button value={comment.comment_id}onClick={(e) => setCommentToDelete(e.target.value)}>Delete Comment</button>
      </div>
    )
}

export default CommentCard