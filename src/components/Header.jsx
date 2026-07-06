import { Link } from 'react-router-dom'

function Header({ theme, toggleTheme }) {
  return (
    <header>
      <p className="site-title">Welcome to My Portfolio</p>

      <nav aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </nav>
    </header>
  )
}

export default Header