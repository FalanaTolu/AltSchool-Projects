import React, { useState, useEffect, useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { Loader } from "../components";

const Table = () => {
  const [data, setData] = useState([]);

  //Fetch data from randomuser.me
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://randomuser.me/api/?results=100&seed=123`
      );
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const result = await response.json();
      result && setData(result.results);
    })();
  }, []);

  if (!data) {
    <Loader />;
  }

  const columns = useMemo(
    () => [
      {
        Header: "Subscriber Details",
        //Table Columns:
        columns: [
          {
            Header: "Picture",
            accessor: "picture.medium",
            Cell: ({ cell: { value } }) => (
              <img src={value} alt={`${data?.login?.username}`} />
            ),
            //Disable sort for picture column
            disableSortBy: true,
          },
          {
            Header: "User Name",
            accessor: "login.username",
          },
          {
            Header: "First Name",
            accessor: "name.first",
          },
          {
            Header: "Last Name",
            accessor: "name.last",
          },
          {
            Header: "Gender",
            accessor: "gender",
          },
          {
            Header: "Date Of Birth",
            accessor: "dob.date",
            Cell: ({ cell: { value } }) => {
              return new Date(value).toLocaleDateString();
            },
          },
          {
            Header: "Age",
            accessor: "dob.age",
          },
          {
            Header: "City",
            accessor: "location.city",
          },
          {
            Header: "Country",
            accessor: "location.country",
          },
          {
            Header: "Time Zone (GMT)",
            accessor: "location.timezone.offset",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Phone",
            accessor: "phone",
          },
          {
            Header: "Created",
            accessor: "registered.date",
            Cell: ({ cell: { value } }) => {
              return new Date(value).toGMTString();
            },
          },
        ],
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    state,
    setGlobalFilter,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, intialState: { pageIndex: 0, pageSize: 10 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  
  const { globalFilter } = state;   // Global filter for table search component

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={globalFilter || ""}
          placeholder={"Search"}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            //note: iterate over page not rows !!!!!
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            min="1"
            max={pageOptions.length}
            value={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;
