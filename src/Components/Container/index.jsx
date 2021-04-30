import React from "react";

import { Titulo } from "../Titulo";
import { Conta } from "../Conta";
import { Extrato } from "../Extrato";

import styled from "styled-components";

export const Container = () => {
  return (
    <DivContainer>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </DivContainer>
  );
};

const DivContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
