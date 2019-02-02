import styled, { css } from 'styled-components'

const Menu = styled.nav(props => css`
  background-color: ${props.theme.colorPrimary};
  position: fixed;
  width: 100%;
  display: flex;
  transition: background-color 300ms linear;
`)

export default Menu
