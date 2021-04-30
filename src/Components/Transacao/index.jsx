import React from "react";
import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;

export const Transacao = ({ type, from, value }) => {
  return (
    <Item>
      <pan className="text">{type}</pan>
      <pan>{from}</pan>
      <pan>{value}</pan>
    </Item>
  );
};
