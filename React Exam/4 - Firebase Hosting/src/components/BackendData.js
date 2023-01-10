import React, { useState, useEffect } from "react";
import {
  collection,
  db,
  query,
  orderBy,
  startAfter,
  endBefore,
  limit,
  limitToLast,
  getDocs,
} from "../config";
import Select from "react-select";
import { Loader } from ".";

const BackendData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalSubscribers, setTotalSubscribers] = useState(0);

  const perPageOptions = [5, 10, 15, 20, 50].map((value) => ({
    value,
    label: `${value} per page`,
  }));

  const totalPages = Math.ceil(totalSubscribers / perPage);

  useEffect(() => {
    getDocs(query(collection(db, "subscribers"))).then((docs) => {
      setTotalSubscribers(docs.docs.length);
    });

    getDocs(
      query(
        collection(db, "subscribers"),
        orderBy("registered", "desc"),
        limit(perPage)
      )
    ).then((querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.login?.uuid,
        }))
      );
    });
  }, [perPage]);

  const showNext = ({ item }) => {
    if (data.length === 0) {
      alert("Thats all we have for now !");
    } else {
      const fetchNextData = async () => {
        getDocs(
          query(
            collection(db, "subscribers"),
            orderBy("registered", "desc"),
            startAfter(item.registered),
            limit(perPage)
          )
        ).then((querySnapshot) => {
          setData(
            querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.login?.uuid,
            }))
          );
          setPage((prev) => prev + 1);
        });
      };
      fetchNextData();
    }
  };

  const showPrevious = ({ item }) => {
    const fetchPreviousData = async () => {
      getDocs(
        query(
          collection(db, "subscribers"),
          orderBy("registered", "desc"),
          endBefore(item.registered),
          limitToLast(perPage)
        )
      ).then((querySnapshot) => {
        setData(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.login?.uuid,
          }))
        );
        setPage((prev) => prev - 1);
      });
    };
    fetchPreviousData();
  };

  if (!data) {
    return <Loader />;
  }

  if (error) {
    return <h2>{`Fetch error: ${error.message}`}</h2>;
  }

  return (
    <div className="users-list">
      <hr />
      {data?.map((subscriber, index) => (
        <div key={index}>
          <h3 style={{ margin: "0" }}>
            {subscriber?.name?.first} {subscriber?.name?.last}
          </h3>
          <div className="user-data">
            <p>
              <span>Gender:</span> {subscriber?.gender}
            </p>
            <p>
              <span>Age:</span> {subscriber?.dob?.age}
            </p>
            <p>
              <span>Location:</span> {subscriber?.location?.city},{" "}
              {subscriber?.location?.country}
            </p>
            <p>
              <span>Email:</span> {subscriber?.email}
            </p>
            <div className="user-image-container">
              <img
                src={subscriber?.picture?.medium}
                alt={subscriber?.name?.first}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="page-nav">
        <p>
          Pages: {page} of {totalPages}{" "}|{" "}
        </p>
        <button
          disabled={page <= 1}
          aria-disabled={page <= 1}
          onClick={() => showPrevious({ item: data[0] })}
        >
          Previous
        </button>
        ...
        <button
          disabled={page >= totalPages}
          aria-disabled={page >= totalPages}
          onClick={() => showNext({ item: data[data.length - 1] })}
        >
          Next
        </button>
        {" "}|{" "}
        Rows per page:{" "}
        <Select
          options={perPageOptions}
          value={perPageOptions.find((v) => v.value === perPage)}
          onChange={(event) => {
          setPerPage(event?.value);
          setPage(1);
          }}
        />
      </div>
    </div>
  );
};

export default BackendData;
