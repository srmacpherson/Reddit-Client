import React, { useState, useEffect } from 'react';
import Article from './components/Article';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles, setSubreddit } from './features/redditSlice';


function App() {
    const dispatch = useDispatch();
    const { articles, subreddit, isLoading, error } = useSelector((state) => state.reddit);

    const [input, setInput] = useState(subreddit);

      // Debounced fetch effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (input.trim() !== subreddit.trim()) {
        dispatch(setSubreddit(input));
      }
    }, 500); // wait 500ms after last keystroke

    return () => clearTimeout(timeoutId); // cleanup on re-type
  }, [input, subreddit, dispatch]);

    useEffect(() => {
      dispatch(fetchArticles(subreddit));
    }, [dispatch, subreddit]);

    const handleChange = (e) => {
      setInput(e.target.value);
    }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>REDDIT SUB SEARCH</h1>
        <input 
        type="text" 
        className="input" 
        value={input} 
        onChange={handleChange} 
        />
      </header>
      
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="articles">
  {(Array.isArray(articles) ? articles.slice(0, 1) : []).map((article, index) => (
    <Article key={index} article={article.data} />
  ))}
</div>
    </div>
  );
}


export default App;
