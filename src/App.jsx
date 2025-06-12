import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Aboutme } from "./components/Pages/Aboutme";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <Aboutme />
      </Container>
      <Footer />
    </div>
  );
};

//rafc
