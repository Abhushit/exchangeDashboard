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
  Container
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
  "& input":{
    color: "#fcfcfc",
    
  },
  "label":{
    color: "#fcfcfc",
  }
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
  });

  useEffect(() => {
    if (location.state) {
      setBotDetails({
        botName: location.state.row.botName,
        brokerName: location.state.row.brokerName,
        active: location.state.row.active,
      });
      setId(location.state.row.id);
    }
  }, []);

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

  const handleSubmit = () => {

  }

  return (
    <div>
        <Container>
      <h1>Add Bot</h1>
      <RootCard>
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

          <Grid item sm={12} textAlign="right">
          <Button
              color="secondary"
              variant="contained"
              onClick={handleBack}
              
            >
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
