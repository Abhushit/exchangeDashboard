import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TablePagination } from "@mui/material";
import moment from "moment/moment";

const StyledPaper = styled(Paper)(({theme}) => ({
  background: theme.palette.primary.darker,
  color: theme.palette.primary.lighter,
  "& .MuiTableCell-root":{
    borderBottom:"none",
  }
}))

const StyledPagination = styled(TablePagination)(({theme}) => ({
  color: theme.palette.primary.lighter,
  "& svg":{
    color: theme.palette.primary.lighter,
  }
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.main,
    fontWeight:"700",
    padding:"10px"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.primary.lighter,
    padding:"10px"

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
    backgroundColor: theme.palette.primary.darker,
    color: theme.palette.primary.lighter,
  },
  "&:nth-of-type(even)": {
    // backgroundColor: theme.palette.action.hover,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.lighter,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // border: 0,
    
  },
}));

export default function TableComponentStats(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // console.log('rows', props.rows.length)

  return (
    <StyledPaper sx={{ width: "100%", overflowY: props.rows.length > 10 ? "auto" : "none", height: props.rows.length > 10 ? "360px" : "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {props.columns.map((col, index) =>
                index === 0 ? (
                  <StyledTableCell>{col.name}</StyledTableCell>
                ) : (
                  <StyledTableCell align="right">{col.name}</StyledTableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody >
            {props.rows
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow key={Math.random()}>
                  {props.columns.map((col, index) =>
                    col.id === "image" ? (
                      index === 0 ? (
                        <StyledTableCell component="th" scope="row">
                          <img
                            src={row.image}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                            alt={row.firstname}
                          />
                        </StyledTableCell>
                      ) : (
                        <StyledTableCell align="right">
                          <img
                            src={row.image}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                            alt={row.firstname}
                          />
                        </StyledTableCell>
                      )
                    ) : index === 0 ? (
                      <StyledTableCell component="th" scope="row">
                        {row[col.id]}
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell align="right">
                        {col.id === "actions" && (
                          // <OptionMenu
                          //   row={row}
                          //   options={props.options}
                          //   currentChange={props.currentChange}
                          // />
                          <>
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={() => props.handleEdit(row)}
                              sx={{ marginRight: "10px" }}
                              size="small"
                            >
                              Edit
                            </Button>
                            <Button
                              color="secondary"
                              variant="contained"
                              onClick={() => props.handleStats(row)}
                              size="small"
                            >
                              Stats
                            </Button>
                          </>
                        )}
                        {
                        col.id === "bot_name" ? row.dict.name :
                        col.id === "broker_name" ? row.dict.exchange : 
                        col.id === "active"
                          ? row[col.id] === true
                            ? "Yes"
                            : "NO"
                          : col.id === "date"
                          ? moment(row[col.id]).format(
                              "dddd, MMMM Do YYYY, h:mm:ss a"
                            )
                          : row[col.id]
                        }
                      </StyledTableCell>
                    )
                  )}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {props.footer !== false && (
        <StyledPagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )} */}
    </StyledPaper>
  );
}
