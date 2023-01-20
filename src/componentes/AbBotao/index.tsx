import React from "react";
import styled from 'styled-components'

const BotaoEstilizado = styled.button`
    background-color: #EB9B00;
    border: 2px solid #EB9B00;
    padding: 16px 32px;
    color:#fff;
    font-size: 20px;
    &:hover{
        background-color: #BB7900;
        border: 2px solid  #BB7900;
    }
`

export const AbBotao = () => {
    return (
        <BotaoEstilizado>
            Clique aqui!
        </BotaoEstilizado>
    )
}