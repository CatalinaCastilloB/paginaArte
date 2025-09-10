import { Link } from "react-router-dom";

export default function Header_() {
  return (
    <header>
      <div className="container">
        <h1>My App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/props">Props</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}