import React from "react";
import { MainContainer, PainelVideo } from "./styled";
import CardVideo from "../CardVideo/CardVideo";
import Nav from "../Nav/Nav";

const Main = () => {

  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (

    <MainContainer>
      <Nav />
      <PainelVideo>
        <CardVideo
          image1={card1.imagemDoVideo}
          titulo={card1.titulo}
          textoAlternativo={card1.textoAlternativo}
        />
      </PainelVideo>
    </MainContainer>
  )
}

export default Main