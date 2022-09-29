import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/nav';
import ArticleList from './components/articleList';
import SingleArticle from './components/singleArticle';
import ErrorPage from './components/errorPage';
import { useState, useEffect } from 'react';
import { getTopics } from './utils/api';

function App() {

  const [topics, setTopics] = useState([])
  const [topicError, setTopicError] = useState(null)

  useEffect(() => {
    getTopics()
    .then(({topics}) => {
      setTopics(topics);
    })
    .catch((err) => {
      setTopicError({err})
    })
},[])

if(topicError) return(<p>Something went wrong... Please try again later</p>)


  return (
    <BrowserRouter>
        <div className="App">
          <Nav topics={topics}/>
          <Routes>
            <Route path ="/" element={<ArticleList />}/>
            {
              topics.map((topic, index) => { 
                return(
                <Route key={index} path={`/${topic.slug}`} element={<ArticleList topic={topic.slug} />} />
              )
              })
            }
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="*" element ={<ErrorPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
