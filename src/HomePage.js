import { Button,Typography } from "@mui/material";

import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "./api-helpers/api-helpers";
import { MovieItem } from "./Components/Movies/MovieItem";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);
  return (
    <Box className="home-box">
      <Box className="box2">
        <img
          src="https://static.kino.de/wp-content/uploads/2022/03/rrr-2022-film-rcm1200x627u.jpg"
          alt="RRR"
          width={"100%"}
          height={"350vh"}
        />
      </Box>
      <Box>
        <Typography className="typo1" variant="h4" fontFamily="algerian">
          Latest release
        </Typography>
      </Box>
      <Box className="home-card1">
        {movies &&
          movies.map((movie, index) => (
            <MovieItem
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={index}
            />
          ))}
        {/* {[1,2,3,4].map((item) => <MovieItem key={item} />)} */}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="contained"
          sx={{
            margin: "auto",
            color: "whitesmoke",
            ":hover": { boxShadow: "5px 5px 10px black" },
          }}
        >
          View ALL Movies
        </Button>
      </Box>
    </Box>
  );
};
