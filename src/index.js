import React from 'react';
import ReactDOM from 'react-dom/client';
import './dist/output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimeGenre from './AnimeGenre';
import AnimeDetails from './AnimeDetails';
import Search from './Search';
import AnimeList from './AnimeList';
const genres = [
  "action", "adventure", "cars", "comedy", "crime", "dementia", "demons", "drama", "dub", "ecchi",
  "family", "fantasy", "game", "gourmet", "harem", "historical", "horror", "josei", "kids", "magic",
  "martial-arts", "mecha", "military", "music", "mystery", "parody", "police", "psychological", "romance",
  "samurai", "school", "sci-fi", "seinen", "shoujo", "shoujo-ai", "shounen", "shounen-ai", "slice-of-life",
  "space", "sports", "super-power", "supernatural", "suspense", "thriller", "vampire", "yaoi", "yuri"
];

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/log-anime" element={<App />} />
        <Route path="/details/:id" element={<AnimeDetails />} />
        <Route path="/list/" element={<AnimeList />} />
        <Route path="/log-anime/search/:id" element={<Search page="1" />} />
        {genres.map((genre) => (
          <Route
            key={genre}
            path={`genres/${genre}`}
            element={<AnimeGenre genre={genre} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
