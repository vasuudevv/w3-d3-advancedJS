const fetch = require("cross-fetch");

let result = {
  actors: [],
  genres: [],
};

const final = async () => {
  fetch(
    "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json"
  )
    .then((res) => res.json())
    .then((output) => {
      const movies = output;
      //console.log(res);
      //console.log(movies);

      movies.forEach((movie) => {
        if (movie.cast != []) {
          movie.cast.forEach((cast) => {
            if (!result.actors.find((actor) => actor.name == cast)) {
              let actor = {
                name: cast,
                movies: [movie.title],
              };
              result.actors.push(actor);
            } else {
              let index = 0;
              for (let actor of result.actors.entries()) {
                if (actor.name == cast) {
                  result.actors[index].movies.push(movie.title);
                }
                index++;
              }
            }
          });
        }
        if (movie.genres != []) {
          movies.genres.forEach((type) => {
            if (!result.genres.find((genre) => genre.type == type)) {
              let genre = {
                type: type,
                movies: [movie.title],
              };
              result.genres.push(genre);
            } else {
              index = 0;
              for (genre of result.genres.entries()) {
                if (genre.type == type) {
                  result.genres[index].movies.push(movie.title);
                }
                index++;
              }
            }
          });
        }
      });
      console.log(result);
    });
};

final();
