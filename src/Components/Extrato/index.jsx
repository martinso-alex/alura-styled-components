import React from "react";
import { Botao, Box } from "../UI";
import { extratoLista } from "../../info";
import { Transacoes } from "../Transacoes";

export const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => (
        <Transacoes
          key={id}
          type={type}
          from={from}
          value={value}
          date={date}
        />
      ))}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};
