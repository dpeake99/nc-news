import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/nav';
import ArticleList from './components/articleList';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route path ="/articles" element={<ArticleList/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
