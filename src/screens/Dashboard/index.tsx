import React from "react";
import { HighlightCard } from "../../HighlightCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UseGreeting,
  UserName,
  Icon,
} from './styles'

export function Dashboard() {

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={
              { uri: 'https://avatars.githubusercontent.com/u/49590645?v=4' }
            } />
            <User>
              <UseGreeting>Olá</UseGreeting>
              <UserName>João</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighlightCard />
    </Container>
  )
}
