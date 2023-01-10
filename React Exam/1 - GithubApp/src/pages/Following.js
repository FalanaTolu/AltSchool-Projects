import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Loader, GetFetchPages } from '../components';

const Following = () => {
  const user = useOutletContext();

  const [page, setPage] = useState(1);

  const totalNum = user.following;
  const per_page = 10;


  const baseUrl = user.following_url.replace('{/other_user}', '');

  const { data, loading, error, startIndex, totalPages } = GetFetchPages(
    baseUrl,
    totalNum,
    page,
    per_page
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{`Fetch error: ${error.message}`}</h2>;
  }

  return (
    <>
    <div className="list follow">
      {data?.slice(startIndex, startIndex + per_page).map((following) => {
        return (
          <article className="followers" key={following.id}>
            <div>
              <div>
                <img src={following.avatar_url} alt={following.login} />
              </div>
              <p>
                <span>Login name:</span>{' '}
                <a href={following.html_url}>{following.login}</a>
              </p>
              <p className="external-link">
                <a href={following.html_url} target="_blank"  rel="noreferrer">
                  View Profile
                </a>
              </p>
            </div>
          </article>
        );
      })}
    </div>
    <div className="page-nav">
        <p>
          Pages: {page} of {totalPages}&#160;&#160;{' '}
        </p>
        <button 
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page <= 1}
          aria-disabled={page <= 1}
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (value, index) => index + 1).map(
          (each, index) => (
            <button key={index} onClick={() => setPage(each)} id={each === page && "current"}>
              {each}
            </button>
          )
        )}
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= totalPages}
          aria-disabled={page >= totalPages}
        >
          <FaChevronRight />
        </button>
      </div>
      </>
  );
};

export default Following;
