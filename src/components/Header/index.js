// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="NavBar">
    <div className="wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave-logo"
        alt="wave"
      />
      <h1 className="Title">Wave</h1>
    </div>
    <ul className="lists-container">
      <Link to="/" className="Title">
        Home
      </Link>
      <Link to="/about" className="Title">
        About
      </Link>
      <Link to="/contact" className="Title">
        Contact
      </Link>
    </ul>
  </div>
)

export default Header
