import React from "react";

const Movie = (props) => {
  const { title, id, poster_path, release_date } = props.movie;

  return (
    <div className="movie-card">
      <div>
        <div
          onClick={() => {
            props.setMovieInfo(id);
            props.setSimilarMovieInfo(id);
          }}
        >
          {poster_path == null ? (
            <img
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              className="movie-thumbnail"
              alt="card"
              style={{ width: "185px", height: "278px" }}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w185${poster_path}`}
              className="movie-thumbnail"
              alt="card"
            />
          )}

          <h1 className="movieHeader">
            {title} <br />{" "}
            {release_date === "" || release_date === undefined
              ? null
              : `(${release_date.slice(0, 4)})`}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Movie;

// movie searches come out based off popularity
