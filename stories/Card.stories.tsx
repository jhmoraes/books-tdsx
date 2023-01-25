import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Component } from 'react'
import { AbCard } from '../src'

export default {
    title: 'Componentes/Card',
    component: AbCard
} as ComponentMeta<typeof AbCard>

const Template: ComponentStory<typeof AbCard> = () => <AbCard/>

export const CardCompra = Template.bind({})