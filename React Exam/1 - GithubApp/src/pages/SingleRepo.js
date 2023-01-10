import React from 'react';
import {
  Link,
  useParams,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import { TfiNewWindow } from 'react-icons/tfi';
import { motion as m } from 'framer-motion';

const SingleRepo = () => {
  const { repoid } = useParams();
  const navigate = useNavigate();
  const repos = useOutletContext();

  let repo = repos.find((repo) => String(repo.id) === repoid);

  return (
    <article className="repo-container">
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="repo-data modal"
      >
        <h3 className="modal-title">{repo.name.toUpperCase()}</h3>
        <p>
          <span>Description:</span>{' '}
          {repo.description ? repo.description : `${null}`}
        </p>
        <p>
          <span>License:</span>{' '}
          {repo.license?.name ? repo.license?.name : `${null}`}
        </p>
        <p>
          <span>Size:</span> {repo.size}kb
        </p>

        <p>
          <span>Language:</span> {repo.language ? repo.language : `${null}`}
        </p>
        <p>
          <span>Forks:</span> {repo.forks}
        </p>
        <p>
          <span> Stars:</span> {repo.stargazers_count}
        </p>
        <p>
          <span> Watchers:</span> {repo.watchers_count}
        </p>
        <p>
          <span>Created:</span> {new Date(repo.created_at).toLocaleString()}
        </p>
        <p>
          <span>Last Update:</span> {new Date(repo.updated_at).toLocaleString()}
        </p>
        <p className="external-link">
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            View on Github <TfiNewWindow />
          </a>
        </p>
        <button className="modal-btn-exit" onClick={() => navigate("/user/repo")}>
          <FaWindowClose fill="red" size="15" />
        </button>
        <Link className="modal-nav-exit" to="/user/repo">
          Back
        </Link>
      </m.div>
    </article>
  );
};

export default SingleRepo;
