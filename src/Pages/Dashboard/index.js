import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TableComponent from "../../Components/TableComponent";

const allBots = [
  {
    dict: {
      active: false,
      exchange: "Binance",
      name: "Marc Test Bot 2",
      owner: "3XiZV2KgANevoEAI09aas4YF3wH2",
    },
    id: "7oC9JzibXC3XF8aDniQN",
  },
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
      api_key:
        "8EYWidwoML8CtL3ePjpCVz4G31aexBPBGe7HzTecGyQtlVrIHKrrm56aEs6I7bwZ",
      daily_dd: "x",
      exchange: "Binance",
      main_dd: "x",
      name: "Marc Binance Bot",
      owner: "21HBQJ5YvBc1GTq1aR98oIVQ4xM2",
      secret_key:
        "sRxlnlN6WL8Fjg1AOUnRlClDpvjIElwTD3ZWnj2AAysf8C2FZj607SHn3whRaZMj",
      token: "x",
    },
    id: "JwTyNWirEGndxRVwK3Co",
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
  {
    dict: {
      active: true,
      api_key:
        "8EYWidwoML8CtL3ePjpCVz4G31aexBPBGe7HzTecGyQtlVrIHKrrm56aEs6I7bwZ",
      daily_dd: "12",
      exchange: "Binance",
      main_dd: "12",
      name: "Marc Binance Test Bot",
      owner: "3XiZV2KgANevoEAI09aas4YF3wH2",
      secret_key:
        "sRxlnlN6WL8Fjg1AOUnRlClDpvjIElwTD3ZWnj2AAysf8C2FZj607SHn3whRaZMj",
      token: "12",
    },
    id: "exrec09cWPtXJRHBa8lh",
  },
  {
    dict: {
      active: false,
      exchange: "Binance",
      name: "Trade Bot",
      owner: "HnncKx7YaNbnFzn1QPIw0bXv7ss1",
    },
    id: "lKEzSTb14PjkfGnA5IcI",
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
