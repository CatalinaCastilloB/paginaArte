export default function Header() {
    return (
      <header>
        <div className="container">
        <h1>My App</h1>
        <nav>
          <a href="#" onClick={() => onNavigate("home")}>Home</a>
          <a href="#" onClick={() => onNavigate("about")}>About</a>
          <a href="#" onClick={() => onNavigate("contact")}>Contact</a>
        </nav>
      </div>
      </header>
    );
  }