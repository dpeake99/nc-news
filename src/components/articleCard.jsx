import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const ArticleCard = ({article}) => {
    return(
        <div className = "itemCard">
        <CardContent>
        <h3 className="item-name">
          {article.title}
        </h3>
        <p>written by {article.author}</p>
        <p>{dayjs(article.created_at).format('DD/MM/YYYY HH:mm')}</p>
        <p>Comment Count: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
      </CardContent>
      <Link to = {`/articles/${article.article_id}`}>Read</Link>
      </div>
    )
}

export default ArticleCard