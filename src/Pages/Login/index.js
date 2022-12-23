import { styled } from '@mui/material';
import React from 'react'
import Form from './Form';

const MainDiv = styled("div")(({ theme }) => ({
    background: theme.palette.primary.darker,
    background: `radial-gradient(circle at right, ${theme.palette.primary.darker} , ${theme.palette.primary.dark})`,
    backgroundSize: "cover",
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
    height:"100vh",
    width:"100%",
    
  }));

  const FormDiv = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    maxWidth:"400px",
    maxHeight:"500px",
    padding:"40px",
    borderRadius:"10px",
    position: "relative",
    [theme.breakpoints.down("md")]: {
        padding:"15px",
        margin:"10px"
      },
  }));

const Login = () => {
  return (
    <MainDiv>
        <FormDiv>
            <Form />
        </FormDiv>
    </MainDiv>
  )
}

export default Login