import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

const HighlightCard = () => {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$ 2.500,00</Amount>
        <LastTransaction>Ultima transação em 1123123</LastTransaction>
      </Footer>
    </Container>
  );
};

export { HighlightCard };
