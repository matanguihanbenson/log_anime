const axios = require('axios');
const fs = require('fs');

async function scrapeId() {
  let currentPage = 1;
  let hasNextPage = true;
  const allAnime = [];
  const malIds = [];

  while (hasNextPage) {
    try {
      const url = `https://api.jikan.moe/v4/anime?page=${currentPage}`;
      const response = await axios.get(url);
      const { data, pagination } = response.data;

      // Extract anime data and add them to the array
      allAnime.push(...data);

      // Extract mal_ids and add them to the malIds array
      const ids = data.map((anime) => anime.mal_id);
      malIds.push(...ids);

      // Update currentPage and hasNextPage based on pagination
      currentPage = pagination.current_page + 1;
      hasNextPage = pagination.has_next_page;

      // Delay for 2 seconds before making the next request
      await delay(2000);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Create a JSON object with the anime data
  const animeJSON = JSON.stringify({ anime: allAnime }, null, 2);

  // Write the anime data JSON object to a file
  fs.writeFile('animeData.json', animeJSON, (err) => {
    if (err) {
      console.error('Error writing animeData.json:', err);
    } else {
      console.log('Anime data have been scraped and saved to animeData.json');
    }
  });

  // Create a JSON object with the mal_ids
  const malIdsJSON = JSON.stringify({ malIds }, null, 2);

  // Write the mal_ids JSON object to a file
  fs.writeFile('malIds.json', malIdsJSON, (err) => {
    if (err) {
      console.error('Error writing malIds.json:', err);
    } else {
      console.log('mal_ids have been scraped and saved to malIds.json');
    }
  });
}

// Delay function
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

scrapeId();
