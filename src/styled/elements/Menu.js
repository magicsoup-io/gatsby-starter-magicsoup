import styled, { css } from 'styled-components'

const Menu = styled.nav(props => css`
  background-color: ${props.theme.colors.primary};
  font-family: ${props.theme.fonts.sans};
  position: fixed;
  width: 100%;
  display: flex;
  transition: background-color 300ms linear;
`)

export default Menu
