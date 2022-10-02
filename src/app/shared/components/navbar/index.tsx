import { FaSun, FaStarAndCrescent, FaSearch, FaGlasses } from 'react-icons/fa';
import { useThemeContext } from '../../contexts/ThemeContext';
import { SearchContext } from '../../contexts/SearchContext';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import './styles.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button id="theme-button" onClick={() => toggleTheme()}>
      {theme === "dark" ? (
        <FaSun
          className="icon"
          style={{fill: "#eae054"}}
        />
      ) : (
        <FaStarAndCrescent
          className="icon"
          style={{fill: "var(--secondary-color)"}}
        />
      )}
    </button>
  );
};

const NavBar = () => {
  const [displayValue, setDisplayValue] = useState<string | undefined>("");
  const { setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayValue) return;

    setSearch(displayValue);
    setDisplayValue("");
    navigate("/");
  };

  return (
    <nav id="navbar">
      <ul className="navbar-links">
        <h2 id="logo">
          <Link to="/">
            <FaGlasses /> AnimeInfoList
          </Link>
        </h2>
        <li className="navbar-item">
          <ThemeSwitcher />
        </li>
      </ul>

      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search a anime"
          onChange={(e) => setDisplayValue(e.target.value)}
          value={displayValue}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
