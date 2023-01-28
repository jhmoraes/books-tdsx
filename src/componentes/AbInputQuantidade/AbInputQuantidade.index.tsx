import React, { useEffect, useState } from "react"
import styled from "styled-components"

const ContainerEstilizado = styled.div`
    width: 100px;
    text-align: center;
    display: inline-block;
    padding: 5px;
`

const LabelEstilizada = styled.div`
    color: #002F52;
    display: block;
    font-weight: 800;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 8px;
`
const BotoesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const BotaoEstilizado = styled.div`
    background: #002F52;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;
    color: #FFF;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SpanEstilizado = styled.div`
    font-size: 18px;
    line-height: 27px;
    display: inline-block;
    margin: 0 12px;
    color: #002F52;
    font-family: Arial, Helvetica, sans-serif;
`


export interface AbInputQuantidadeProps {
    onChange?: (value: number) => void
}
 

export const AbInputQuantidade = ({ onChange }: AbInputQuantidadeProps) => {

    const [value, setValue] = useState(1)

    useEffect(() => {
        if (onChange) {
            onChange(Number(value))
        }
    }, [value])

    return (
        <ContainerEstilizado>
            <LabelEstilizada>Quantidade</LabelEstilizada>
            <BotoesContainer>
                <BotaoEstilizado onClick={() => setValue(prev => prev - 1)}>-</BotaoEstilizado>
                <SpanEstilizado>{value}</SpanEstilizado>
                <BotaoEstilizado onClick={() => setValue(prev => prev + 1)}>+</BotaoEstilizado>
            </BotoesContainer>
        </ContainerEstilizado>
    )
}
