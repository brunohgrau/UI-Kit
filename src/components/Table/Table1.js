import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const TableSectionContainer = styled.section`
  /* sm:px-8  */
  max-width: 56rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
`;

const TableContainer = styled.table`
  min-width: 100%;
  line-height: 1.5;
`;

const TableHeader = styled.th`
  padding: 0.75rem 0.25rem;
  background-color: rgb(243 244 246);
  border: 1px solid rgb(209 213 219);
  color: rgb(31 41 55);
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
`;

const TableData = styled.td`
  padding: 1.25rem 0.75rem;
  border-bottom: 1px solid rgb(209 213 219);
  background: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const TableDataParagraph = styled.p`
  color: rgb(17 24 39);
  white-space: nowrap;
`;

function Table1(props) {
  const data = React.useMemo(
    () => [
      {
        col1: "Income",
        col2: "160",
        col3: "2022"
      },
      {
        col1: "Income",
        col2: "260",
        col3: "2022"
      },
      {
        col1: "Income",
        col2: "360",
        col3: "2022"
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "col1" // accessor is the "key" in the data
      },
      {
        Header: "Value",
        accessor: "col2"
      },
      {
        Header: "Date",
        accessor: "col3"
      }
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <>
      <TableSectionContainer>
        <TableContainer {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <TableHeader {...column.getHeaderProps()}>
                        {
                          // Render the header
                          column.render("Header")
                        }
                        <span>{" 🔽"}</span>
                      </TableHeader>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells?.map((cell) => {
                        // Apply the cell props
                        return (
                          <TableData {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              <TableDataParagraph>
                                {/* {console.log(cell.getCellProps())} */}
                                {cell.render("Cell")}
                              </TableDataParagraph>
                            }
                          </TableData>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </TableContainer>
      </TableSectionContainer>
    </>
  );
}

export default Table1;
