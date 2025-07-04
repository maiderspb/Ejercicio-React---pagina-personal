import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
      <Link to="/">Home</Link>
      <Link to="/reserve">Reserve</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar