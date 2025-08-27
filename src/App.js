import React, { useState, useEffect } from 'react';
import Article from './components/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');

 useEffect(() => {
  const fetchArticles = async () => {
    try {
      const response = await fetch(
        `https://corsproxy.io/?${encodeURIComponent(`https://www.reddit.com/r/${subreddit}.json`)}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setArticles(data.data.children);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  fetchArticles();
}, [subreddit]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>REDDIT SUB SEARCH</h1>
        <input type="text" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)} />
      </header>
      <div className="articles">
        {articles.map((article, index) => (
          <Article key={index} article={article.data} />
        ))}
      </div>
    </div>
  );
}

export default App;
