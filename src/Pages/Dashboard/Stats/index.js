import { ArrowBack, Info } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import TableComponent from "../../../Components/TableComponent";

const columnDrawdawn = [
  { id: "date", name: "Date" },
  { id: "starting_balance", name: "Starting Balance" },
  { id: "ending_balance", name: "Ending Balance" },
  { id: "drawdown", name: "Drawdown" },
];

const columnPositions = [
  { id: "symbol", name: "Symbol" },
  { id: "entry", name: "Entry" },
  { id: "sl", name: "SL" },
  { id: "tp", name: "TP" },
  { id: "pnl", name: "PNL" },
];

const rowsDrawdawn = [
  {
    date: "2022-10-23",
    starting_balance: "102.5",
    ending_balance: "80",
    drawdown: "0.2",
  },
  {
    date: "2022-11-10",
    starting_balance: "720",
    ending_balance: "679",
    drawdown: "0.6",
  },
  {
    date: "2022-09-29",
    starting_balance: "879",
    ending_balance: "100",
    drawdown: "0.2",
  },
  {
    date: "2022-08-20",
    starting_balance: "900",
    ending_balance: "500",
    drawdown: "0.6",
  },
  {
    date: "2022-08-20",
    starting_balance: "900",
    ending_balance: "500",
    drawdown: "0.6",
  },
];

const rowsPostions = [
  { symbol: "$", entry: "10", sl: "19", tp: "89", pnl: "10" },
  { symbol: "$", entry: "09", sl: "10", tp: "16", pnl: "0.9" },
  { symbol: "$", entry: "123", sl: "321", tp: "374", pnl: "19" },
  { symbol: "$", entry: "11", sl: "723", tp: "12", pnl: "89" },
  { symbol: "$", entry: "67", sl: "112", tp: "812", pnl: "32" },
];

const StatsCard = styled(Card)(({ theme }) => ({
  background: theme.palette.primary.dark,
  padding: "20px",
  lineHeight: "2",
  height: "75%",
  color: theme.palette.primary.lighter,
  [theme.breakpoints.down("md")]: {
    padding: "20px",
    height: "auto",
  },
}));

const MyCard = styled(Card)(({ theme }) => ({
  background: theme.palette.primary.dark,
  padding: "20px",
  lineHeight: "2",
  color: theme.palette.primary.lighter,
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

const Stats = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={3} mt={1} mb={2}>
          <Grid item md={4} xs={12}>
            <h2>Statistics </h2>
            <StatsCard>
              <div>
                <span>Trader : </span> <span className="ml-2">doption</span>
              </div>
              <div>
                <span>Initial Balance : </span>{" "}
                <span className="ml-2">110.78</span>
              </div>
              <div>
                <span>Balance : </span> <span className="ml-2">110.56</span>
              </div>
              <div>
                <span>Drawdawn : </span> <span className="ml-2">0.0</span>
              </div>
            </StatsCard>
          </Grid>
          <Grid item md={8} xs={12}>
            <h2>Positions</h2>
            <MyCard>
              <TableComponent
                columns={columnPositions}
                rows={rowsPostions}
                footer={false}
                // handleEdit={handleEdit}
                // handleStats={handleStats}
                // options={options}
                // currentChange={currentChange}
              />
            </MyCard>
          </Grid>
          <Grid item md={12} xs={12}>
            <h2>Drawdown</h2>
            <MyCard>
              <TableComponent
                columns={columnDrawdawn}
                rows={rowsDrawdawn}
                footer={false}
                // handleEdit={handleEdit}
                // handleStats={handleStats}
                // options={options}
                // currentChange={currentChange}
              />
            </MyCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Stats;
