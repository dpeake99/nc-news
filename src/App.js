import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/nav';
import ArticleList from './components/articleList';
import SingleArticle from './components/singleArticle';

function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route path ="/articles" element={<ArticleList topic={""} />}/>
            <Route path="/cooking" element={<ArticleList topic={"cooking"} />}/>
            <Route path="/coding" element={<ArticleList topic={"coding"} />}/>
            <Route path="/football" element={<ArticleList topic={"football"} />}/>
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
