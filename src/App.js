import React from "react";
import "./styles.css";
import { BodyContainer } from "./Componentes/Main/styled";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Main from "./Componentes/Main/Main";
import Nav from "./Componentes/Nav/Nav";

export default function App() {

  return (
    <div>
      <BodyContainer>
        <Header />
        <Main>
          <Nav />
        </Main>
        <Footer />
      </BodyContainer>
    </div>
  );
}
