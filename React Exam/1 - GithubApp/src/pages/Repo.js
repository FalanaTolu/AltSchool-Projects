import React, { useState } from 'react';
import { Link, Outlet, useLocation, useOutletContext } from 'react-router-dom';
import { FaFolder, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Loader, GetFetchPages } from '../components';

const Repo = () => {
  const user = useOutletContext();
  const location = useLocation();
  const [page, setPage] = useState(1);

  const totalNum = user.public_repos;
  const per_page = 10;

  const baseUrl = user.repos_url;

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

  const locateOutlet = (event) => {
    event.preventDefault();
    const pos = document.getElementsByClassName('modal')[0];
    if (event.screenY < 300) {
      pos.style.top = event.pageY + 'px';
      pos.style.left = event.pageX + 20 + 'px';
    } else if (event.screenY > 600) {
      pos.style.top = event.pageY - 350 + 'px';
      pos.style.left = event.pageX + 20 + 'px';
    } else {
      pos.style.top = event.pageY - 200 + 'px';
      pos.style.left = event.pageX + 20 + 'px';
    }
    window.removeEventListener('click', locateOutlet);
  };

  return (
    <>
      <h3 className="list-title">List of Repositories</h3>
      <div className="list">
        {data?.slice(startIndex, startIndex + per_page).map((repo) => {
          return (
            <article className="list-item" key={repo.id}>
              <FaFolder
                size="40"
                fill="rgb(255,233,162)"
                style={{ backgroundColor: 'inherit' }}
              />
              <a
                className="repo-link"
                href={repo.html_url}
                title="Click to view on Github"
              >
                <p>{repo.name.toUpperCase()}</p>
              </a>
              <p>
                Description: {repo.description ? repo.description : `${null}`}
              </p>
              <Link
                className="repo-modal-link-btn"
                to={`/user/repo/${repo.id}`}
                state={{ background: location }}
                onClick={() => {
                  window.addEventListener('click', locateOutlet);
                }}
              >
                Details...
              </Link>
            </article>
          );
        })}
      </div>
      <Outlet context={data} />
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
            <button
              key={index}
              onClick={() => setPage(each)}
              id={
                each === page && "current" 
              }
            >
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

export default Repo;
