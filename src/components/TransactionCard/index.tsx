import React from "react";
import * as S from './style'

interface category {
  name: string, 
  icon: string,
}

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  Title: string;
  Amount: string;
  Category: category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({data}: Props){
  return(
  <S.Container>
    <S.Title>{data.Title}</S.Title>

    <S.Amount type={data.type}>
      {data.type === 'negative' && '- '}
      {data.Amount}
      </S.Amount>

    <S.Footer>
      <S.Category>
        <S.Icon name={data.Category.icon}/>
        <S.CategoryName>{data.Category.name}</S.CategoryName>
      </S.Category>

      <S.Date>{data.date}</S.Date>
    </S.Footer>

  </S.Container>
  )

}