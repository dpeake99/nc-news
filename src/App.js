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

  useEffect(() => {
    getTopics()
    .then(({topics}) => {
      setTopics(topics);
        })
},[])


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
