import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  Container,
  Header,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  HighlightCards,
} from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/57016585?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Luiz</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
};

export { Dashboard };
