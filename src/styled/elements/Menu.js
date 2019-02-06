import styled, { css } from 'styled-components'
import { themeGet } from 'styled-system'

const Menu = styled.nav(props => css`
  background-color: ${themeGet('colors.primary', 'purple')};
  font-family: ${themeGet('fonts.sans', 'Arial')};
  position: fixed;
  width: 100%;
  display: flex;
  transition: background-color 300ms linear;
`)

export default Menu
