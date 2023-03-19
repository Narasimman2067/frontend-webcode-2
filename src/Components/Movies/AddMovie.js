import {
  Button,
  Checkbox,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { addMovie } from "../../api-helpers/api-helpers";

const AddMovie = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    posterUrl: "",
    releaseDate: "",
    featured:true,
  });
  const [actors,setActors]=useState([""])
  const [actor,setActor]=useState("")

  const handleChange =(e)=>{
setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value}))
  }
  const handleSubmit =(e)=>{
    e.preventDefault();

    console.log(inputs,actors)
    addMovie({...inputs,actors})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          padding={10}
          margin="auto"
          display={"flex"}
          flexDirection="column"
          boxShadow={"10px 10px 20px blue"}
        >
          <Typography textAloign={"center"} variant="h5" fontFamily={"verdana"}>
            {" "}
            Add Movie
          </Typography>
          <FormLabel> Title</FormLabel>
          <TextField value={inputs.title} onChange={handleChange} name="title" variant="standard" margin="normal" />
          <FormLabel>Description</FormLabel>
          <TextField  value={inputs.description} onChange={handleChange} name="description" variant="standard" margin="normal" />
          <FormLabel>posterUrl</FormLabel>
          <TextField  value={inputs.posterUrl} onChange={handleChange} name="posterUrl" variant="standard" margin="normal" />
          <FormLabel>ReleaseDate</FormLabel>
          <TextField value={inputs.releaseDate} onChange={handleChange} type='date'  name="releaseDate" variant="standard" margin="normal" />
          <FormLabel>Actor</FormLabel>
          <Box display={"flex"}>
            <TextField  value={inputs.actors} onChange={(e)=>setActors(e.target.value)} name="title" variant="standard" margin="normal" />
            <Button
            type="submit"
            value={actors}
              sx={{ margin: "auto" }}
              variant="contained"
              color="secondary"
              onClick={()=>{setActors([ ...actors,actor]);
            setActor();}}
            >
              Add
            </Button>
          </Box>
          {/* <FormLabel>terms and conditions</FormLabel>
          <Checkbox value={inputs.featured} onChange={handleChange}sx={{ marginRight: "auto" }} /> */}

          <Button variant="contained" color="secondary">
            Add new movie
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddMovie;
