// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="cont1">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      className="logo"
      alt="website logo"
    />
    <div className="divs">
      <ul className="unorder">
        <li className="list">
          <Link to="/">Home</Link>
        </li>
        <li className="list">
          <Link to="/product">Products</Link>
        </li>

        <li className="list">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <button type="button" className="btn1">
        Logout
      </button>
    </div>
  </div>
)

export default Header
