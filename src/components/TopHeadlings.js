import React, { useState, useEffect } from "react";
import axios from "axios"
const TopHeadlings = () => {
  const [news, setNews] = useState([]);
  const [newsdisplay, setNesdisplay] = useState(0);
  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=ffdf04272b6a4ffebf3abb2c6c262889"
      );
      
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div className="container mx-auto p-4" id="home">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news
          .slice(newsdisplay * 5, newsdisplay * 5 + 5)
          .map((article, index) => (
            <div key={index} className="bg-white shadow-md p-4">
              <img src={article.urlToImage} alt={article.title}></img>
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-500 hover:text-blue-600"
              >
                Read more
              </a>
            </div>
          ))}
      </div>
      <button
        className="bg-blue-500 p-2 text-white my-3 rounded-lg"
        onClick={() => setNesdisplay(newsdisplay+1)}
      >
        Load More....
      </button>
    </div>
  );
};

export default TopHeadlings;
