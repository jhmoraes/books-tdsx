import React from "react"
import styled from 'styled-components'
import Image from './Image'


const CardContainer = styled.div`
    height: 266px;
    width: 725px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 24px;
    background-color: #FFFFFF;
    left: 65px;
    top: 857px;

    //[distancia horizontal] [vertical] [blur] [extensao] [cor]

    //[distancia horizontal]    
    //valor positivo -> sombra a direita
    //valor negativo -> valor a esquerda

    //[distancia vertical]    
    //valor positivo -> sombra a abaixo da caixa
    //valor negativo -> valor a cima da caixa

    //[blur] 
    // zero - totalmente nitida
    // valor maior - mais desfocada

    //[extensao]
    //positivo - aumenta o tamanho da sombra
    //negativo - diminui o tamanho da sombra
    
    //[cor] - padrão é a cor do texto

`

export const AbCard = () => {


    return (
        <CardContainer>
            <div>
                <p>Sobre o livro</p>
                <h3>Liderança em Desigin</h3>
                <p>Habilidades de gestão para alavancar sua carreira</p>
                <p>Por: Vitor Zonini</p>
                <p>A partor de:</p>
                <p>R$ 20,90</p>
            </div>
            <div>
               <Image imageUrl="https://imagepng.org/wp-content/uploads/2017/10/coracao.png"/>
            </div>
        </CardContainer>
    )
}