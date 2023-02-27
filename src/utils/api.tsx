const apiKey = "?api_key=5b94a47e85b7ee4565f71d9571321016";
const baseRoute = `https://api.themoviedb.org/3`;

const routes = {
  movies: `${baseRoute}/movie/popular/${apiKey}`,
  tvShow: `${baseRoute}/tv/popular/${apiKey}`
};


export default routes;
