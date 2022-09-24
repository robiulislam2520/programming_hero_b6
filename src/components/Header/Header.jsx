import logo from "../../assets/images/Logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="menu_items">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="ema-john" />
            </a>
          </div>
          <nav className="nav_links">
            <ul>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/orders">Orders</a>
              </li>
              <li>
                <a href="/inventory">Inventory</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
