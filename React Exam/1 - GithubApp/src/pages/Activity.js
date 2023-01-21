import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Loader, GetFetchPages } from '../components';

const Activity = () => {
  const [page, setPage] = useState(1);
  
  const user = useOutletContext();
  
  const baseUrl = user.events_url.replace('{/privacy}','')
  const totalNum = 30; //Last 30 events
  const per_page = 10

  const {data, loading, error, startIndex, totalPages} = GetFetchPages(baseUrl, totalNum, page, per_page);
  

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{`Fetch error: ${error.message}`}</h2>;
  }
  
  return (
    <>
      <h3 className="list-title">Last 30 events</h3>
      <div className="list">
        {data
          ?.slice(startIndex, startIndex + per_page)
          .map((activity, index) => {
            return (
              <article key={index}>
                <div className="list-item">
                  <p>
                    <span>Repo:</span>{' '}
                    {activity.repo?.name}
                  </p>
                  <p>
                    <span key={activity.id}>Event Type:</span> {activity.type}
                  </p>
                  <p>
                    <span>Date:</span>{' '}
                    {new Date(activity.created_at).toLocaleString()}
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
            <button key={index} onClick={() => setPage(each)} id={each === page ? "current" : ""}>
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

export default Activity;
