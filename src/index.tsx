import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};


// Dessa forma exporto tudo que estiver dentro de AbBotao

export * from './componentes/AbBotao/AbBotao.index'
export * from './componentes/AbCard/AbCard.index'
export * from './componentes/AbTag/AbTag.index'
export * from './componentes/AbGrupoOpcoes/AbGrupoOpcoes.index'
export * from './componentes/AbCampoTexto/AbCampoTexto.index'
export * from './componentes/AbInputQuantidade/AbInputQuantidade.index'