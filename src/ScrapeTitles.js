const axios = require('axios');
const fs = require('fs');

async function scrapeTitles() {
  let currentPage = 1;
  let hasNextPage = true;
  const allAnime = [];

  while (hasNextPage) {
    try {
      const url = `https://api.jikan.moe/v4/anime?page=${currentPage}`;
      const response = await axios.get(url);
      const { data, pagination } = response.data;

      // Extract anime data and add them to the array
      allAnime.push(...data);

      // Update currentPage and hasNextPage based on pagination
      currentPage = pagination.current_page + 1;
      hasNextPage = pagination.has_next_page;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Create a JSON object with the anime data
  const animeJSON = JSON.stringify({ anime: allAnime }, null, 2);

  // Write the JSON object to a file
  fs.writeFile('animeData.json', animeJSON, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Anime data have been scraped and saved to animeData.json');
    }
  });
}

scrapeTitles();
