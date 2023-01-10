import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import { Navigation, SEO, Loader, GetFetch, InputUser } from '../components';
import { ProfileView } from '../pages';
import { useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState('FalanaTolu');
  const [message, setMessage] = useState('');

  const url = `https://api.github.com/users/${user}`;

  const { data, loading, error, fetchUsers } = GetFetch(url);

  useEffect (() => {fetchUsers()},[user])

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{`Fetch error: ${error.message}`}</h2>;
  }

  return (
    <m.section
      initial={{ x: '-50%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className="profile-section"
    >
      <SEO
        title="Profile"
        name="Profile Page"
        description="Github profile information is displayed here using the Github API"
        type="App"
      />
      <Navigation />
      <InputUser
        onChange={(event) => setMessage(event.target.value)}
        onClick={() => setUser(message)}
      />
      <ProfileView data={data} />
      <Outlet context={data} />
    </m.section>
  );
};

export default Profile;
