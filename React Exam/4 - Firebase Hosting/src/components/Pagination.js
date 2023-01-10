import React from "react";
import Select from "react-select";
import Loader from "./Loader";

const Pagination = (props) => {
  const {
    offset,
    setOffset,
    perPage,
    setPerPage,
    totalSubscribers,
    totalPages,
  } = props;

  if (typeof totalSubscribers !== "number") return <Loader />;

  const perPageOptions = [10, 20, 30, 40, 50].map((value) => ({
    value,
    label: `${value} per page`,
  }));

  const from = Math.min(offset + 1, totalSubscribers);
  const to = Math.min(offset + perPage, totalSubscribers);
  const currentPage = offset / perPage + 1;
  const highestPossibleOffset = perPage * (totalPages - 1);

  const pageArray = [-2, -1, 0, 1, 2]
    .map((v) => currentPage + v)
    .filter((page) => page > 0 && page <= totalPages);

  return (
    <>
      <div className="page-nav">
        Showing {from} to {to} of {totalSubscribers} items |{" "}
        {totalSubscribers > 0 && (
          <>
            <button
              onClick={() => setOffset(0)}
            >
              &#171;
            </button>
            <button
              onClick={() => setOffset((prev) => Math.max(prev - perPage, 0))}
            >
              &#8249;
            </button>
            {!pageArray.includes(1) && (
              <>
                <button
                  id={currentPage === 1 && "current"}
                  onClick={() => {
                    setOffset(0);
                  }}
                >
                  1
                </button>
                <div>...</div>
              </>
            )}
            {pageArray.map((page) => {
              return (
                <button
                  id={page === currentPage && "current"}
                  onClick={() => {
                    setOffset(perPage * (page - 1));
                  }}
                >
                  {page}
                </button>
              );
            })}
            {!pageArray.includes(totalPages) && (
              <>
                <div>...</div>
                <button
                  id={currentPage === totalPages && "current"}
                  onClick={() => {
                    setOffset(highestPossibleOffset);
                  }}
                >
                  {totalPages}
                </button>
              </>
            )}
            <button
              onClick={() => {
                setOffset((prev) =>
                  Math.min(prev + perPage, highestPossibleOffset)
                );
              }}
            >
              &#8250;
            </button>
            <button
              onClick={() => setOffset(highestPossibleOffset)}
            >
              &#187;
            </button>
          </>
        )}{" "}
        |{" "}
      </div>
      <div className="page-nav">
        Rows per page:{" "}
        <Select
          options={perPageOptions}
          value={perPageOptions.find((v) => v.value === perPage)}
          onChange={(event) => {
            setPerPage(event?.value);
            setOffset(0);
          }}
        />
      </div>
    </>
  );
};

export default Pagination;
