import { React, useState, useRef, useCallback, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import { useWindowResize } from "../../hooks/useWindowResize";
import { AutoSizer, Column, Table } from "react-virtualized";
import MuiVirtualizedTable from "../../component/MuiVirtualizedTable";
import { useTranslation, withTranslation, Trans } from "react-i18next";

const heightBar = 24 * 2 + 28;

function EnhancedTableHead(props) {
  // const {
  //   onSelectAllClick,
  //   order,
  //   orderBy,
  //   numSelected,
  //   rowCount,
  //   onRequestSort,
  // } = props;
  // const createSortHandler = (property) => (event) => {
  //   onRequestSort(event, property);
  // };

  return (
    <TableHead style={{ backgroundColor: "#ebedf0" }}>
      <TableRow>
        <TableCell padding="checkbox" style={{ border: 0 }}>
          <Checkbox
            style={{ color: "black" }}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          padding="none"
          style={{ border: 0, color: "black" }}
        >
          Name
        </TableCell>

        <TableCell
          component="th"
          scope="row"
          padding="none"
          style={{ border: 0, color: "black" }}
        >
          Email
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          padding="none"
          style={{ border: 0, color: "black" }}
        >
          Phone
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          padding="none"
          width={150}
          style={{ border: 0, color: "black" }}
        >
          Role
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          padding="none"
          width={150}
          style={{ border: 0, color: "black" }}
        >
          Status
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

function ListDataComponent() {
  const sample = [
    ["Frozen yoghurt", 159, 6.0, 24, 4.0],
    ["Ice cream sandwich", 237, 9.0, 37, 4.3],
    ["Eclair", 262, 16.0, 24, 6.0],
    ["Cupcake", 305, 3.7, 67, 4.3],
    ["Gingerbread", 356, 16.0, 49, 3.9],
  ];
  function createData(id, name, email, phone, role, status) {
    return { id, name, email, phone, role, status };
  }

  const rows = [];

  for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
  }

  return (
    <Paper
      style={{
        height: `calc(100% - ${heightBar}px)`,
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <MuiVirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            label: "CheckBox",
            dataKey: "checkbox",
          },
          {
            widthPercent: 0.35,
            label: "Name",
            dataKey: "name",
          },
          {
            widthPercent: 0.29,
            label: "Email",
            dataKey: "email",
            numeric: false,
          },
          {
            widthPercent: 0.2,
            label: "Phone",
            dataKey: "phone",
            numeric: true,
          },
          {
            widthPercent: 0.08,
            label: "Role",
            dataKey: "role",
            numeric: true,
          },
          {
            widthPercent: 0.08,
            label: "Status",
            dataKey: "status",
            numeric: true,
          },
        ]}
      />
    </Paper>
  );
}

export default ListDataComponent;
