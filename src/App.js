import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/nav';
import ArticleList from './components/articleList';
import ArticleListByTopic from './components/articleListByTopic';
import SingleArticle from './components/singleArticle';
import { useState } from 'react';

function App() {

  const [sortedBy, setSortedBy] = useState("created_at")
  const [orderedBy, setOrderedBy] = useState("desc")

  return (
    <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route path ="/articles" element={<ArticleList sortedBy={sortedBy} setSortedBy={setSortedBy} orderedBy={orderedBy} setOrderedBy={setOrderedBy} />}/>
            <Route path="/cooking" element={<ArticleListByTopic topic={"cooking"} sortedBy={sortedBy} setSortedBy={setSortedBy} orderedBy={orderedBy} setOrderedBy={setOrderedBy}/>}/>
            <Route path="/coding" element={<ArticleListByTopic topic={"coding"} sortedBy={sortedBy} setSortedBy={setSortedBy} orderedBy={orderedBy} setOrderedBy={setOrderedBy}/>}/>
            <Route path="/football" element={<ArticleListByTopic topic={"football"} sortedBy={sortedBy} setSortedBy={setSortedBy} orderedBy={orderedBy} setOrderedBy={setOrderedBy}/>}/>
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
