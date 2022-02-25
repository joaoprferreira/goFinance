import React from "react";
import { Text } from 'react-native'
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UseGreeting,
  UserName,
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
        </UserWrapper>
      </Header>
    </Container>
  )
}
