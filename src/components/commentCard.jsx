import CardContent from '@mui/material/CardContent';
import dayjs from "dayjs";
const CommentCard = ({comment}) => {

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
      </div>
    )
}

export default CommentCard