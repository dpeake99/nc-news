import CardContent from '@mui/material/CardContent';
const CommentCard = ({comment}) => {
    return(
        <div className = "commentCard">
        <CardContent>
        <h3 className="item-name">
          {comment.author}
        </h3>
        <h4>{comment.body}</h4>
        <p>{comment.created_at}</p>
        <p>Votes: {comment.votes}</p>
      </CardContent>
      </div>
        )
}

export default CommentCard