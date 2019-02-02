import styled, { css } from 'styled-components'

const Menu = styled.nav(props => css`
  background-color: ${props.theme.colorPrimary};
  font-family: ${props.theme.fontPrimary};
  position: fixed;
  width: 100%;
  display: flex;
  transition: background-color 300ms linear;
`)

export default Menu
