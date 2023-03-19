import axios from "axios";

export const getAllMovies = async () => {
  const res = await axios.get("/movie").catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("No data");
  }
  const data = await res.data;
  return data;
};

export const sendUserAuthRequest = async (data, signup) => {
  const res = await axios
    .post(`/user/${signup ? signup : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));
  if (res.status !== 200 && res.status !== 201) {
    return console.log("unexpected error");
  }
  const resData = await res.data;
  return resData;
};

export const sendAdminAuthRequest = async (data) => {
  const res = await axios
    .post("/admin/login", {
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("unexpected error");
  }
  const resData = await res.data;
  return resData;
};

// export const getUserBooking = async (id) => {
//   const res = await axios.get(`admin/bookings/${id}`).catch((err) => console.log(err));
//   // if (res.status !== 200) {
//   //   return console.log("unexpected error");
//   // }
//   const resData = await res.data;
//   return resData;
// };
export const getMovieDetails = async (id) => {
  const res = await axios.get(`/movie/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("unexpected error");
  }
  const resData = await res.data;
  return resData;
};
export const newBookings = async (data) => {
  const res = await axios
    .post("/booking", {
      movie: data.movie,
      setNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem("userId"),
    
    })
    .catch((err) => console.log(err));
  if (res.status !== 201) {
    return console.log("unexpected error");
  }
  const resData = await res.data;
  return resData;
};

export const getUserBooking = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios
    .get(`user/bookings/${id}`)

    .catch((err) => console.log(err));

  if (res.status !==200) {
    return console.log("unexpected error");
  }

  const resData = await res.data;
  return resData;
};

export const deleteBooking = async (id) => {
const res = await axios
.get(`/bookings/${id}`)
.catch((err) => console.log(err));

if (res.status !==200) {
  return console.log("unexpected error");
}
const resData = await res.data;
  return resData;
}

export const addMovie = async (data) => {

const res = await axios.post("/movie/addmovies",{
title:data.title,
description:data.description,
releaseDate:data.releaseDate,
posterUrl:data.posterUrl,
actors:data.actors,
feature:data.feature,
admin:localStorage.getItem("adminId"),

},{
headers:{

  Authorization:`Bearer ${localStorage.getItem("token")}`,
},


}).catch((err)=>console.log(err));

if (res.status !==201) {
  return console.log("unexpected error");

}const resData = await res.data;
return resData;
}

