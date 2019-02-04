// styled-components based extension
import React from 'react'
import styled from 'styled-components'

import Headline from './Headline'
import theme from '../theme'

const H1 = styled(Headline)`

`

H1.defaultProps = {
  as: 'h1',
  fontSize: [6, 7]
}

export default H1