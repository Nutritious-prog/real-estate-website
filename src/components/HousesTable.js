import React from "react";
import { FaHandHoldingUsd, FaGreaterThan } from "react-icons/fa";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./Adventages.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#C28563",
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, rooms, bathrooms, surface, price, avaliability) {
  return { name, rooms, bathrooms, surface, price, avaliability };
}

const rows = [
  createData("House A", 8, 2, 182.0, 4700.0, true),
  createData("House B", 12, 2, 193.0, 6200.0, false),
  createData("House C", 9, 3, 215.0, 7200.0, true),
  createData("House D", 7, 1, 122.0, 6800.0, false),
  createData("House E", 10, 2, 181.0, 9300.0, true),
];

function HousesTable() {
  return (
    <div className="w-full flex bg-white pb-10">
      <div className="w-[100%] lg:w-[90%] md:w-[80%] mx-auto flex flex-col">
        {/* UP PART */}
        <div className="xl:w-[50%] w-[90%] text-center mx-auto flex flex-col py-14">
          <p className="text-[#C28563] py-2 text-lg montserrat-font">
            ABOUT AVAILABILITY
          </p>
          <h2 className="font-bold text-5xl py-4 text-black">
            MOVE IN READY HOMES EXTREM TOWER
          </h2>
        </div>
        {/* DOWN PART */}
        <div className="w-full flex bg-white xl:flex-row flex-col p-2">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead className="bg-[#C28563]">
                <TableRow>
                  <StyledTableCell>RESIDENCE</StyledTableCell>
                  <StyledTableCell align="center">ROOMS</StyledTableCell>
                  <StyledTableCell align="center">BATHROOMS</StyledTableCell>
                  <StyledTableCell align="center">SURFACE</StyledTableCell>
                  <StyledTableCell align="center">
                    SQ. MET. PRICE
                  </StyledTableCell>
                  <StyledTableCell align="center">AVAILABLE</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name} className={row.avaliability ? "" : "opacity-40"}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.rooms}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.bathrooms}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.surface} &#13217;
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.price} zł
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.avaliability ? (
                        <p className="text-green-500">TAK</p>
                      ) : (
                        <p className="text-red-500">NIE</p>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default HousesTable;
