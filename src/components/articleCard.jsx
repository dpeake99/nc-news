import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

const ArticleCard = ({article}) => {
    return(
        <div className = "itemCard">
        <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <h3 className="item-name">
          {article.title}
        </h3>
        <p>written by {article.author}</p>
      </CardContent>
      <Link to = {`/item/${article.article_id}`}>Read</Link>
      </Card>
      </div>
        )
}

export default ArticleCard