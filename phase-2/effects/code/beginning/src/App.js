/*

  Phase 2 -> Effects
  Updated April 5, 2024
  Created August 7, 2023
  By Sakib Rasul

  Core Deliverables
  1. Instead of rendering the local array `articles`, host `../db.json` with JSON Server.
  2. Implement a button that, when clicked, loads the articles hosted with JSON Server.
  3. Load the hosted articles on mount (as a result of <App />'s first render).

  This was the static load data
  const articles = [ { id: 0, title: "Why I Fetch Data", author: "Max the Beagle" } ];
*/

import { useState, useEffect } from "react";

export default function App() {
  const [ articles, setArticles ] = useState([{ id: 0, title: "", author: "" }])
  useEffect( () => {
    fetch("http://localhost:3001/articles")
  .then(response => response.json())
  .then(articleData => {
    setArticles(articleData)
    })
  .catch(error => console.error(error))
  }, [] )
  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>The Flatiron Archives</h1>
      {articles.map(article => (
        <div key={article.id}>
          <em>{article.title}</em> by {article.author}
        </div>
      ))}
    </div>
  );
}
