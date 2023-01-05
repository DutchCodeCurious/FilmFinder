//Data base
const movieData = movies;
//Point where movies/series must be append to
const moviesList = document.getElementById("movieList");
//selector
const filmFilter = document.querySelectorAll('input[name="filter"]');

//Adds the movies to the DOM from movieData
function addMoviesToDom(array) {
  array.forEach((element) => {
    var newLi = document.createElement("li");
    var movieLink = document.createElement("a");
    movieLink.href = "https://www.imdb.com/title/" + element.imdbID + "/";
    var moviePoster = document.createElement("img");
    moviePoster.src = element.poster;
    moviesList.appendChild(newLi);
    newLi.appendChild(movieLink);
    movieLink.appendChild(moviePoster);
  });
}

//Default fills site with all movies/series
addMoviesToDom(movieData);

//Function iterate through movieData finds movies searched with buttons on Titles
function foundItems(prompt) {
  return movieData.filter((el) => el.title.includes(prompt));
}
//Function iterate through movieData finds movies searched on year
function foundYears(prompt) {
  return movieData.filter((el) => Number(el.year) >= prompt);
}

// handel on change event from buttons, adds movies to the DOM
function handleOnChangeEvent(event) {
  for (let i = 0; i < filmFilter.length; i++) {
    filmFilter[i].addEventListener("change", function () {
      var val = this.value;
      switch (val) {
        case "filter_since":
          movie = foundYears(2014);
          moviesList.innerHTML = "";
          addMoviesToDom(movie);
          break;
        case "filter_avenger":
          movie = foundItems("Avengers");
          moviesList.innerHTML = "";
          addMoviesToDom(movie);
          break;
        case "filter_xmen":
          movie = foundItems("X-Men");
          moviesList.innerHTML = "";
          addMoviesToDom(movie);
          break;
        case "filter_princess":
          movie = foundItems("Princess");
          moviesList.innerHTML = "";
          addMoviesToDom(movie);
          break;
        case "filter_batman":
          movie = foundItems("Batman");
          moviesList.innerHTML = "";
          addMoviesToDom(movie);
          break;
        default:
      }
    });
  }
}

//Gets info from searchbar, lets input be all LowerCase and iterate through movieData that also is set to LowerCase. Adds movies to the DOM by letter
function handleOnSearchEvent() {
  var prompt = document.getElementById("searchtext").value.toLowerCase();
  var found = movieData.filter((el) => el.title.toLowerCase().includes(prompt));
  moviesList.innerHTML = "";
  addMoviesToDom(found);
}
