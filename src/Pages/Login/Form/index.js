import {
  Button,
  Grid,
  InputLabel,
  Snackbar,
  styled,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import theme from "../../../theme/theme";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SubmitDiv = styled("div")(({ theme }) => ({
  "& .MuiButton-root": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.lighter,
    width: "100%",
    // marginTop: "10px",
  },
}));

const Form = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [snackStatus, setSnackStatus] = useState("");
  const [snackMessage, setSnackMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "admin@gmail.com",
    password: "admin123",
    // email: "",
    // password:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleRegister = () => {
    // navigate("/register");
  };

  const handleSubmit = () => {
    let data = {
      username: "admin123",
      email: "test@gmail.com",
    }
    let token = "2213723hibh312";
    setOpen(true);
    setSnackStatus("success");
    setSnackMessage("Logged in Successfully");
    localStorage.setItem("login", JSON.stringify(data));
    localStorage.setItem("token", JSON.stringify(token));
    setTimeout(() => {
      window.location = "/";
    }, 1000);

  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign="center">
          <h2
            style={{
              margin: "0",
              paddingBottom: "20px",
              fontSize: "35px",
              color: "#fff",
            }}
          >
            Login
          </h2>
        </Grid>
        <Grid item md={12} xs={12}>
          <InputLabel style={{ color: "#fff" }}>Email</InputLabel>
          <TextField
            variant="outlined"
            // label="Email"
            name="email"
            type="text"
            value={loginData.email}
            onChange={(e) => handleChange(e)}
            style={{
              width: "100%",
              borderRadius: "5px",
              background: theme.palette.primary.lighter,
            }}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <InputLabel style={{ color: "#fff" }}>Password</InputLabel>
          <TextField
            variant="outlined"
            // label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={(e) => handleChange(e)}
            style={{
              width: "100%",
              borderRadius: "5px",
              background: theme.palette.primary.lighter,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <span style={{ color: " #fff" }}>Forgot Password?</span>
        </Grid>
        <Grid item xs={12} md={12}>
          <SubmitDiv>
            <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
              Sign In
            </Button>
          </SubmitDiv>
        </Grid>

        {/* <Grid item xs={12} md={12}>
          <RegisterDiv>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Sign Up
            </Button>
          </RegisterDiv>
        </Grid> */}
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackStatus}
          sx={{ width: "100%" }}
        >
          {snackMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Form;
