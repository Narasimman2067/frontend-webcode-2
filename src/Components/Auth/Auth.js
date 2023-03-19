import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  sendUserAuthRequest } from '../../api-helpers/api-helpers';
import { userActions } from '../../store';
import { AuthForm } from './AuthForm'

export const Auth = () => {
  const navigate =useNavigate()
  const dispatch =useDispatch();
const onResReceived =(data)=>{
  console.log(data)
  dispatch(userActions.login())
  localStorage.setItem("userId",data.id);
  localStorage.setItem("token",data.token);
  navigate("/")
};
const getData =(data)=>{
console.log(data);
sendUserAuthRequest(data.inputs,data.signup)
.then(onResReceived)
.catch((err)=>console.log(err)
};



  return (
    <div>
 <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
   
  )
}
