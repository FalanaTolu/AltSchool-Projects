import { useState, useEffect } from 'react';

const GetFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  return { data, loading, error, fetchUsers };
};

const GetFetchPages = (baseUrl, totalNum, page, per_page) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const startIndex = page * per_page - per_page;
  const totalPages = Math.ceil(totalNum / per_page);

  const fetchPages = async (page) => {
    const fetchPromise = [];
    try {
      for (page = 1; page < totalPages + 1; page++) {
        const response = await fetch(
          `${baseUrl}?page=${page}&per_page=${per_page}`
        );
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        fetchPromise.push(response);
      }
      const responses = await Promise.all(fetchPromise);
      const results = await Promise.all(
        responses.map((response) => response.json())
      );
      let dataList = [];
      results.forEach((result) => {
        dataList = dataList.concat(result);
      });
      setData(dataList);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
    // eslint-disable-next-line
  }, []);

  return { data, loading, error, startIndex, page, per_page, totalPages };
};

export { GetFetch, GetFetchPages };
