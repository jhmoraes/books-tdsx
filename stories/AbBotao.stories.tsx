/* Aqui estou criando uma hitória como o storybook quer */


import React from "react";
import { AbBotao } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'Componentes/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = () => <AbBotao />
/* O template é o componetstory do abbotao que retorna um componente renderizado */

export const Primario = Template.bind({})