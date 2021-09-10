import axios from 'axios';

const animeUrl = 'https://api.jikan.moe/v3';
const animeUrlFilter = 'search/anime?q=&order_by=members&sort=desc&page=1&limit=19';

const getAnime = async () => axios.get(`${animeUrl}/${animeUrlFilter}`).then((result) => {
  const anime = [];
  if (result.status === 200) {
    const { data } = result;
    const { results } = data;
    results.forEach((animeData) => {
      const animeUnique = {
        id: animeData.mal_id,
        url: animeData.url,
        image: animeData.image_url,
        title: animeData.title,
        synopsis: animeData.synopsis,
        type: animeData.type,
        episodes: animeData.episodes,
        score: animeData.score,
      };
      return anime.push(animeUnique);
    });
  }
  return anime;
});

export default { getAnime };
