// src/components/Main.jsx
export default function Main({ currentPage }) {
    return (
      <main>
        {currentPage === "home" && (
          <>
            <h1>Home Page 🏠</h1>
            <p>Welcome to the homepage of your app!</p>
          </>
        )}
  
        {currentPage === "about" && (
          <>
            <h1>About Page 📖</h1>
            <p>This app was built with React + Vite and plain CSS.</p>
          </>
        )}
  
        {currentPage === "contact" && (
          <>
            <h1>Contact Page 📬</h1>
            <p>Feel free to reach out via email at hello@example.com.</p>
          </>
        )}
      </main>
    );
  }
  