// styled-components based extension
import React from 'react'
import styled from 'styled-components'
import { Heading } from '@magicsoup.io/stock'

import theme from '../theme'

const Headline = styled(Heading)`
  letter-spacing: 1px;
`

Headline.defaultProps = {
  m: 0,
  p: 0,
  color: 'primary'
}

export default Headline