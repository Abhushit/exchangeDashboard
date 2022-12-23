import {
  Autocomplete,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  styled,
  Snackbar,
  TextField,
  Container,
  Box,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";

const allBrokers = [
  {
    name: "Juan Fella",
    id: "123",
  },
  {
    name: "Arons Kite",
    id: "109",
  },
  {
    name: "Arisu Neyko",
    id: "43",
  },
  {
    name: "Blanka Wilson",
    id: "56",
  },
];

const RootCard = styled(Card)(({ theme }) => ({
  background: theme.palette.primary.dark,
  padding: "40px",
  color: theme.palette.primary.lighter,
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
  "& input": {
    color: "#fcfcfc",
  },
  label: {
    color: "#fcfcfc",
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddBot = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [snackStatus, setSnackStatus] = useState("");
  const [snackMessage, setSnackMessage] = useState("");

  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [botDetails, setBotDetails] = useState({
    botName: "",
    brokerName: "",
    active: false,

    userName: "",
    mfa: "",
    password: "",
    putDeviation: "",
    callDeviation: "",
    stopLossPercentage: "",
    maxDrawdown: "",
    maxDailyDrawdown: "",
    contractAmount: "",
    markOrBid: "",

    token: "",
  });

  useEffect(() => {
    if (location.state) {
      // setBotDetails({
      //   botName: location.state.row.dict.name,
      // brokerName: location.state.row.dict.exchange,
      //   active: location.state.row.dict.active,
      // });
      // for(let i = 0; i < Object.keys(location.state.row.dict).length; i ++){
      //   console.log(Object.keys(location.state.row.dict)[i]);
      // }
      setId(location.state.row.id);
      setBotDetails({
        ...botDetails,
        exchange: location.state.row.dict.exchange,
      });
    }
  }, [location.state]);


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBotDetails({
      ...botDetails,
      [name]: value,
    });
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setBotDetails({
      ...botDetails,
      [name]: checked,
    });
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Container>
        <h1>{params.id ? "Edit Bot" : "Add Bot"}</h1>
        <RootCard>
          {!id ? (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="botName"
                  type="text"
                  label="Bot Name"
                  value={botDetails.botName}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  //   {...defaultProps}
                  id="clear-on-escape"
                  clearOnEscape
                  //   variant="contained"
                  options={allBrokers}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Exchange/Broker"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>

              <Grid item sm={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={botDetails.active}
                      onChange={handleCheck}
                      name="active"
                    />
                  }
                  label="Bot Active"
                />
              </Grid>
            </Grid>
          ) : botDetails.exchange === "Robinhood" ? (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="userName"
                  type="text"
                  label="Username"
                  value={botDetails.userName}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="mfa"
                  type="text"
                  label="MFA"
                  value={botDetails.mfa}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="password"
                  type="password"
                  label="Password"
                  value={botDetails.password}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="putDeviation"
                  type="text"
                  label="put +- deviation"
                  value={botDetails.putDeviation}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="callDeviation"
                  type="text"
                  label="call +- deviation"
                  value={botDetails.callDeviation}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="stopLossPercentage"
                  type="text"
                  label="Stop Loss Percentage"
                  value={botDetails.stopLossPercentage}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="maxDrawdown"
                  type="text"
                  label="Max Drawdown"
                  value={botDetails.maxDrawdown}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="maxDailyDrawdown"
                  type="text"
                  label="Max Daily Drawdown"
                  value={botDetails.maxDailyDrawdown}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="contractAmount"
                  type="text"
                  label="Contract Amount in"
                  value={botDetails.contractAmount}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="markOrBid"
                  type="text"
                  label="Mark or Bid +1"
                  value={botDetails.markOrBid}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="token"
                  type="text"
                  label="Token"
                  value={botDetails.token}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="maxDailyDrawdown"
                  type="text"
                  label="Max Daily Drawdown"
                  value={botDetails.maxDailyDrawdown}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  name="maxDrawdown"
                  type="text"
                  label="Max Drawdown"
                  value={botDetails.maxDrawdown}
                  onChange={(e) => handleChange(e)}
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          )}

          <Grid container spacing={2}>
            <Grid item xs={12} textAlign={"right"} mt={3}>
            <Button color="secondary" variant="contained" onClick={handleBack}>
              Back
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleSubmit}
              disabled={loading}
              style={{ marginLeft: "10px" }}
            >
              {params.id ? "Edit Bot" : "Add Bot"}
            </Button>

            {loading && (
              <CircularProgress size={20} style={{ marginLeft: "10px" }} />
            )}
            </Grid>
          </Grid>
        </RootCard>

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
      </Container>
    </div>
  );
};

export default AddBot;
