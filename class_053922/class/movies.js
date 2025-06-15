(async function fetchAllMovies() {
  try {
    let url =
      "https://api.themoviedb.org/3/movie/popular?include_adult=false&language=en-US&page=1&api_key=1ef33d0988889fd4f6c374211d20e38c";

    let allMovies = await fetch(url);
    let movies = await allMovies.json();
    console.log(movies);

    let movieResults = movies.results;
    console.log(movieResults);

    console.log(movieResults[0]);

    let movieContainer = document.getElementById("movie-list");

    // DISPLAY SINGLE MOVIE

    // let newDiv = document.createElement("div");
    // let newImg = document.createElement("img");
    // newImg.src = `https://image.tmdb.org/t/p/w185${movieResults[3].poster_path}?api_key=1ef33d0988889fd4f6c374211d20e38c`;
    // newImg.alt = movieResults[3].title;

    // let newText = document.createElement("h3");

    // newText.textContent = movieResults[3].title;

    // newDiv.appendChild(newImg);
    // newDiv.appendChild(newText);

    // movieContainer.appendChild(newDiv);



    // DISPLAY ALL MOVIES

    for (let i = 0; i < movieResults.length; i++) {
      let newDiv = document.createElement("div");
      let newImg = document.createElement("img");
      newImg.src = `https://image.tmdb.org/t/p/w185${movieResults[i].poster_path}?api_key=1ef33d0988889fd4f6c374211d20e38c`;
      newImg.alt = movieResults[i].title;

      let newText = document.createElement("h3");

      newText.textContent = movieResults[i].title;

      newDiv.appendChild(newImg);
      newDiv.appendChild(newText);

      movieContainer.appendChild(newDiv);
    }
  } catch (err) {
    console.log(err);
  }
})();

// immediately invoked functions IIFE
