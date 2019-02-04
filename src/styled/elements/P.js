// styled-components based extension
import React from 'react'
import styled from 'styled-components'
import { Text } from '@magicsoup.io/stock'
import theme from '../theme'


const P = styled(Text)`
  line-height: 1.55;

  strong{
    font-weight: 700;
  }
`

P.defaultProps = {
  color: 'font',
  fontSize: 2,
  as: 'p',
  mt: 3,
  mb: 0,
  p: 0,
}

export default P