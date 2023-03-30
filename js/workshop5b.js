const apiKey = 'b4cdfba7';
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&`;

async function getMovieData() {
  const movieTitle = document.getElementById('movieTitle').value;

  if (!movieTitle) {
    alert('Please enter a movie title');
    return;
  }

  try {
    const response = await fetch(`${apiUrl}t=${movieTitle}`);
    const movieData = await response.json();

    if (movieData.Response === 'False') {
      alert(movieData.Error);
      return;
    }

    const movieDataHtml = `
    <h2>Title=${movieData.Title}</h2>
      <h2>IMDB=${movieData.imdbRating}</h2>
    `;

    document.getElementById('movieData').innerHTML = movieDataHtml;
  } catch (error) {
    alert('Error retrieving movie data. Please try again.');
    console.error(error);
  }
}