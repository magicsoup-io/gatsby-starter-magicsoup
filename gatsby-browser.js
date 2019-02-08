import React, { Fragment } from "react"
import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from "react-i18next";

import theme from './src/components/styled/theme'
import GlobalStyle from './src/components/styled/global-styles'
import i18n from './src/components/i18n'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Fragment>
          {element}
          <GlobalStyle />
        </Fragment>
      </I18nextProvider>
    </ThemeProvider>
  )
}