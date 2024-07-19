async function searchMovie() {
  const apiKey = '61efead3'; // Replace with your OMDb API key
  const movieTitle = document.getElementById('movie-title').value;
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieTitle)}`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
          document.getElementById('result').innerHTML = `
              <h2 id="title">${data.Title} (${data.Year})</h2>
              <p id="director"><strong>Director:</strong> ${data.Director}</p>
              <p id="actors"><strong>Actors:</strong> ${data.Actors}</p>
              <p id="plot"><strong>Plot:</strong> ${data.Plot}</p>
              <img src="${data.Poster}" alt="Movie Poster" id="poster">
          `;
      } else {
          document.getElementById('result').innerHTML = `<p id="error">${data.Error}</p>`;
      }
  } catch (error) {
      document.getElementById('result').innerHTML = `<p id="error">Something went wrong: ${error.message}</p>`;
  }
}
