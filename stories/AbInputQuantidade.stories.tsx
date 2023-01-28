import React from "react";
import { AbInputQuantidade, AbInputQuantidadeProps } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
    title: 'Componentes/AbInputQuantidade',
    component: AbInputQuantidade,
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInputQuantidade>


const Template: ComponentStory<typeof AbInputQuantidade> = (args) =><AbInputQuantidade {...args}/>

export const AbInputQuantidadeComponent  = Template.bind({})

AbInputQuantidadeComponent.args = {
    label: 'label'
} as AbInputQuantidadeProps