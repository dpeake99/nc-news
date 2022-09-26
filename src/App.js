import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/nav';
import ArticleList from './components/articleList';
import ArticleListByTopic from './components/articleListByTopic';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route path ="/articles" element={<ArticleList/>}/>
            <Route path="/cooking" element={<ArticleListByTopic topic={"cooking"}/>}/>
            <Route path="/coding" element={<ArticleListByTopic topic={"coding"}/>}/>
            <Route path="/football" element={<ArticleListByTopic topic={"football"}/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
