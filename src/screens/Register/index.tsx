
import React, { useState } from 'react'
import { Button } from '../../components/Form/Button'

import { Input } from '../../components/Form/Input'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionsType
} from './styles'

export function Register() {
  const [trasactionType, setTrasactionType] = useState('')

  console.log('TransactionType:', trasactionType)

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTrasactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='Preço'
          />
          <TransactionsType>

            <TransactionTypeButton
              type='up'
              title='Income'
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={trasactionType === 'up'}
            />

            <TransactionTypeButton
              type='down'
              title='Outcome'
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={trasactionType === 'down'}
            />

          </TransactionsType>
        </Fields>


        <Button title='Enviar' />
      </Form>


    </Container>
  )
}