import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TableComponent from "../../Components/TableComponent";

const allBots = [

  {
    dict: {
      active: true,
      api_key: "24eeacac4022b1edd63d87f11de9fa0b87a46126",
      daily_dd: "12",
      exchange: "FXCM",
      main_dd: "12",
      name: "Anjerry",
      owner: "21HBQJ5YvBc1GTq1aR98oIVQ4xM2",
      secret_key: "12",
      token: "24eeacac4022b1edd63d87f11de9fa0b87a46126",
    },
    id: "Bn97R42H3TAvfuuUDQW9",
  },
  
  {
    dict: {
      active: true,
      api_key: "jalen.anderson@gmail.co",
      exchange: "Robinhood",
      name: "Robinhood",
      owner: "21HBQJ5YvBc1GTq1aR98oIVQ4xM2",
      secret_key: "HashhajksjH162678",
      token: "KFIWDN36GHJK4W6T",
    },
    id: "dqLMRDMpHcqPoVXpKni5",
  },
];

const columns = [
  { id: "id", name: "ID" },
  { id: "bot_name", name: "Name" },
  { id: "broker_name", name: "Broker" },
  { id: "actions", name: "Actions" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleStats = (row) => {
    // console.log("statss >>", row);
    navigate(`/stats/${row.id}`,{ state: {row: row} });
  };

  const handleEdit = (row) => {
    navigate(`/add_bot/${row.id}`, {
      state: { row: row },
    });
  };

  const handleAdd = () => {
    navigate("/add_bot");
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={2} mt={1}>
          <Grid item md={6} xs={6}>
            <h1>Bots</h1>
          </Grid>
          <Grid
            item
            md={6}
            xs={6}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button color="primary" variant="contained" onClick={handleAdd}>
              + Create Bot
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TableComponent
              columns={columns}
              rows={allBots}
              handleEdit={handleEdit}
              handleStats={handleStats}
              // options={options}
              // currentChange={currentChange}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
