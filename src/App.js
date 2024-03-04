import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";
import { BodyContainer, MainContainer, TelaToda } from "./GlobalStyled";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <BodyContainer>
      <TelaToda>
        <Header />
        <MainContainer>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </MainContainer>
        <Footer />
      </TelaToda>
    </BodyContainer>
  );
}
