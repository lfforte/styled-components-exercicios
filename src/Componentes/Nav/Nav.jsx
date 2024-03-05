import React from "react";
import { MenuVertical } from "./styled";

const Nav = () => {

  return (
    <MenuVertical>
      <ul>
        <li className="botoes-meunu-vertical">Início</li>
        <li className="botoes-meunu-vertical">Em alta</li>
        <li className="botoes-meunu-vertical">Inscrições</li>
        <hr />
        <li className="botoes-meunu-vertical">Originais</li>
        <li className="botoes-meunu-vertical">Histórico</li>
      </ul>
    </MenuVertical>
  )
}

export default Nav