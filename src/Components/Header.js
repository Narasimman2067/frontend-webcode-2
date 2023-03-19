import React, { useEffect, useState } from "react";
import {
  AppBar,
  Autocomplete,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Toolbar,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { Box } from "@mui/system";
import { getAllMovies } from "../api-helpers/api-helpers.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "../store/index.js";

const Header = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  const logout = (isAdmin) => {
   dispatch(isAdmin?adminActions.logout():userActions.logout);
  };
const handleChange=(e,val)=>{

  const movie =movies.find((m)=>m.title ===val)
  console.log(movie)
if(isUserLoggedIn){
navigate(`/bookings/${movie._id}`)
}
}
// const handleSubmit = (e)=>{
//   e.preventDefault()}
 
  return (
    <AppBar 
     position="sticky" sx={{ bgcolor: "grey" }}>
      <Toolbar className="top-bar">
        <Box width={"20%"}>
         <IconButton LinkComponent={Link} to="/">
         <MovieIcon />
         </IconButton>
        </Box>
        <Box>
          <Tabs>
            <Tab LinkComponent={Link} to="/home" label="Home" />
          </Tabs>
        </Box>
        <Box width={"50%"} margin={"auto"}>
          <Autocomplete
          onChange={handleChange}
            freeSolo
            options={movies && movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                color="primary"
                textcolor="inherit"
                {...params}
                placeholder="search here"
              />
            )}
          />
        </Box>
        <Box className="tabs-top">
          <Tabs
            indicatorColor="secondary"
            textcolor="inherit"
            value={value}
            // here that onchange function is changr that color whenever a event triggered
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/movies" label="Movies" />
            <Tab label="Admin" LinkComponent={Link} to="/admin"  />

            {!isAdminLoggedIn && !isUserLoggedIn && (
              <>
                {/* <Tab label="Admin" LinkComponent={Link} to="/admin"  /> */}
                <Tab label="Auth" LinkComponent={Link} to="/auth"  />
              </>
            )}
            {isUserLoggedIn && (
              <>
                {/* <Tab label="Profile" LinkComponent={Link} to="/user"  /> */}
                <Tab
                  onClick={() =>logout(false)}
                  LinkComponent={Link}
                  label="logout"
                  to="/"
                  />
               
              </>
            )}

            {isAdminLoggedIn && (
              <>
                <Tab label="Add movies" LinkComponent={Link} to="/add"  />
                {/* <Tab label="Profile" LinkComponent={Link} to="/admin"  /> */}
                <Tab
                  onClick={() => logout(true)}
                  LinkComponent={Link}
                  label="logout"
                  to="/"
                  
                />
              </>
            )}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
