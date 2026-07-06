import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </footer>
  )
}
export default Footer