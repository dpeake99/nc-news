import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => {
    return(
        <div className = "itemCard">
        <CardContent>
        <h3 className="item-name">
          {article.title}
        </h3>
        <p>written by {article.author}</p>
      </CardContent>
      <Link to = {`/articles/${article.article_id}`}>Read</Link>
      </div>
    )
}

export default ArticleCard