import React from 'react';
import { NavLink } from 'react-router-dom';
import { TfiNewWindow } from 'react-icons/tfi';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ProfileView = ({ data }) => {
  return (
    <article className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <div className="profile">
        <div className="profile-image-container">
          <img src={data.avatar_url} alt={data.name} />
          <div>
            <span className="icon-container">
              <FaMapMarkerAlt />
            </span>{' '}
            {data.location}
          </div>
        </div>
        <div className="profile-text">
          <h3>{data.name}</h3>
          <p>
            <span>Login name:</span> {data.login}
          </p>
          <p>
            <span>Bio:</span> {data.bio}
          </p>
          <p>
            <span>Email:</span> {data.email}
          </p>
          <p>
            <span>Twitter: </span> {data.twitter_username}
          </p>
          <p>
            <span>Joined:</span> {new Date(data.created_at).toLocaleString()}
          </p>
          <p>
            <span>Public Repos:</span> {data.public_repos} &#160;&#160;{' '}
            <span>Last Update:</span>{' '}
            {new Date(data.updated_at).toLocaleString()}
          </p>
          <p>
            <span>Followers:</span> {data.followers} &#160;&#160;{' '}
            <span>Following:</span> {data.following}
          </p>
          <p className="external-link">
            <a href={data.html_url} target="_blank" rel="noreferrer">
              View on Github <TfiNewWindow fill="rgb(145, 145, 145)" />
            </a>
          </p>
        </div>
      </div>
      <h3 className="link-to-outlet">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="/user/repo"
        >
          Repositories
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="/user/activity"
        >
          Activity
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="/user/following"
        >
          Following
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to="/user/followers"
        >
          Followers
        </NavLink>
      </h3>
    </article>
  );
};

export default ProfileView;
