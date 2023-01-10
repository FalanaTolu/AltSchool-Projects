import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ChangeTheme } from '../components';

const Navigation = () => {
  const { theme, toggleTheme } = ChangeTheme();

  const icon =
    theme === 'light' ? <FiMoon size="25px" /> : <FiSun size="25px" />;

  return (
    <div className="nav-bar">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active nav-link' : 'nav-link'
        }
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active nav-link' : 'nav-link'
        }
        to="/user"
      >
        Profile
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active nav-link' : 'nav-link'
        }
        to="/test"
      >
        Test
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'active nav-link' : 'nav-link'
        }
        to="/about"
      >
        About
      </NavLink>
      <button className="theme-btn" onClick={toggleTheme}>
        {icon}
      </button>
    </div>
  );
};

export default Navigation;
