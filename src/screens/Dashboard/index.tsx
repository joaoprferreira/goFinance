import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
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
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string,
}

export function Dashboard() {

  const MockTransactionList: DataListProps = [
    {
    id: '1',
    type: 'positive',
    Title: "Desenvolvimento de site",
    Amount: "R$ 12.000,00",
    Category: {
      name: "Vendas",
      icon: 'dollar-sign'
    },
    date: "13/04/2020",
},
{
  id: '2',
  type: 'negative',
  Title: "Hamburgueria Pizzy",
  Amount: "R$ 59,00",
  Category: {
    name: "Alimentação",
    icon: 'coffee'
  },
  date: "10/04/2020",
},   
{
  id: '3',
  type: 'negative',
  Title: "Aluguel do apartamento",
  Amount: "R$ 1.200,00",
  Category: {
    name: "Casa",
    icon: 'shopping-bag'
  },
  date: "27/03/2020",
},

]

const TestingData = MockTransactionList
console.log("Testing Data ::", TestingData)

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

      <HighlightCards>
        <HighlightCard
        type="up" 
        title="Entradas" 
        amount='R$ 17.400,00' 
        lastTransaction="Última entrada dia 07 de março" 
      />
      <HighlightCard 
        type='down'
        title="Saídas" 
        amount='R$ 1.259,00' 
        lastTransaction="Última saída dia 03 de abril" 
      />
      <HighlightCard 
        type='total'
        title="Total" 
        amount='R$ 16.141,00' 
        lastTransaction="01 à 16 de abril" 
      />

      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={MockTransactionList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item}/>}
        />

      </Transactions>

    </Container>
  )
}
