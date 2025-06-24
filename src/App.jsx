import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Aboutme } from "./components/Pages/Aboutme";
import { Home } from "./components/Pages/Home";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <a
          href="/cv.pdf"
          download
          style={{
            margin: "16px 32px 0 0",
            background: "#61dafb",
            color: "#23234a",
            padding: "8px 16px",
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            display: "inline-block",
          }}
        >
          Descargar hoja de vida
        </a>
      </div>
      <Container>
        <Aboutme />
      </Container>
      <Footer />
    </div>
  );
};

//rafc
