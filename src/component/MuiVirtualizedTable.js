import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import { AutoSizer, Column, Table } from "react-virtualized";

const classes = {
  flexContainer: "ReactVirtualizedDemo-flexContainer",
  tableRow: "ReactVirtualizedDemo-tableRow",
  tableRowHover: "ReactVirtualizedDemo-tableRowHover",
  tableCell: "ReactVirtualizedDemo-tableCell",
  noClick: "ReactVirtualizedDemo-noClick",
};

const styles = ({ theme }) => ({
  // temporary right-to-left patch, waiting for
  // https://github.com/bvaughn/react-virtualized/issues/454
  "& .ReactVirtualized__Table__headerRow": {
    ...(theme.direction === "rtl" && {
      paddingLeft: "0 !important",
    }),
    ...(theme.direction !== "rtl" && {
      paddingRight: undefined,
    }),
    backgroundColor: theme.palette.bgHeaderTable,
  },
  "& .ReactVirtualized__Table__row": {
    ...(theme.direction === "rtl" && {
      paddingLeft: "0 !important",
    }),
    ...(theme.direction !== "rtl" && {
      paddingRight: undefined,
    }),
  },
  [`& .${classes.flexContainer}`]: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  [`& .${classes.tableRow}`]: {
    cursor: "pointer",
  },
  [`& .${classes.tableRowHover}`]: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  [`& .${classes.tableCell}`]: {
    flex: 1,
  },
  [`& .${classes.noClick}`]: {
    cursor: "initial",
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ dataKey, cellData, columnIndex }) => {
    const { columns, rowHeight, onRowClick } = this.props;
    console.log("DAta KeyAA : " + dataKey);
    if (dataKey === "checkbox") {
      return (
        <TableCell
          padding="checkbox"
          style={{
            width: rowHeight,
            height: rowHeight,
          }}
        >
          <Checkbox
            style={{
              width: rowHeight,
              height: rowHeight,
            }}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
      );
    } else {
      return (
        <TableCell
          component="div"
          className={clsx(classes.tableCell, classes.flexContainer, {
            [classes.noClick]: onRowClick == null,
          })}
          variant="body"
          style={{
            height: rowHeight,
          }}
          align={
            (columnIndex != null && columns[columnIndex].numeric) || false
              ? "right"
              : "left"
          }
        >
          {cellData}
        </TableCell>
      );
    }
  };

  headerRenderer = ({ dataKey, label, columnIndex }) => {
    const { headerHeight, columns } = this.props;
    console.log("DAta Key : " + dataKey);
    if (dataKey === "checkbox") {
      return (
        <TableCell
          padding="checkbox"
          style={{ width: headerHeight, height: headerHeight }}
        >
          <Checkbox
            style={{
              width: headerHeight,
              height: headerHeight,
            }}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
      );
    } else {
      return (
        <TableCell
          component="div"
          className={clsx(
            classes.tableCell,
            classes.flexContainer,
            classes.noClick
          )}
          variant="head"
          style={{ height: headerHeight }}
          align={columns[columnIndex].numeric || false ? "right" : "left"}
        >
          <span>{label}</span>
        </TableCell>
      );
    }
  };

  render() {
    const { columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit",
            }}
            headerHeight={headerHeight}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, widthPercent, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  // style={{ borderBottom: "1px solid rgb(212, 212, 212)" }}
                  {...other}
                  width={width * widthPercent}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      widthPercent: PropTypes.number,
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

export default MuiVirtualizedTable = styled(MuiVirtualizedTable)(styles);
