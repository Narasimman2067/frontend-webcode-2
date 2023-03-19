import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const MovieItem = ({ title, releaseDate, posterUrl, id }) => {
  return (
    <Card  width={"200"} height={320} 
      sx={{
       
        borderRadius: 5,
        margin: 2,

        ":hover": { boxShadow: "10px 10px 20px green" },
      }}
    >
      <img height={"50%"} width="100%"  src={posterUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(releaseDate).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        LinkComponent={Link}
        to={`/booking/${id}`}
          color="inherit"
          sx={{ margin: "auto", color: "blue" }}
          size="small"
          variant="contained"
          indicatorcolor="secondary"
        >
          Book now
        </Button>
      </CardActions>
    </Card>
  );
};
