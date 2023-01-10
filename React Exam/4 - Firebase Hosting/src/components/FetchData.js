import React, { useState, useEffect } from "react";
import { Loader, Pagination } from ".";

const FetchData = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const totalSubscribers = fetchedData?.results?.length;
  const totalPages = Math.ceil(totalSubscribers / perPage);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://randomuser.me/api/?results=1000&seed=123`
      );
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const result = await response.json();
      setFetchedData(result);
      setError(null);
    } catch (error) {
      setError(error.message);
      setFetchedData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      <Loader />;
    }

    fetchUsers();
  }, [offset, perPage]);


  return (
    <div className="users-list">
      <hr />
      {fetchedData?.results
        .slice(offset, offset + perPage)
        .map((subscriber, index) => (
          <div key={index}>
            <h3 style={{ margin: "0" }}>
              {index + offset + 1}. {subscriber?.name?.title}{" "}
              {subscriber?.name?.first} {subscriber?.name?.last}
            </h3>
            <div className="user-data">
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
      <Pagination
        offset={offset}
        setOffset={setOffset}
        perPage={perPage}
        setPerPage={setPerPage}
        totalSubscribers={totalSubscribers}
        totalPages={totalPages}
      />
    </div>
  );
};

export default FetchData;
