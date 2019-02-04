// styled-components based extension
import React from 'react'
import styled from 'styled-components'

import Headline from './Headline'

const H4 = props =>
  <Headline
    as="h4"
    color="font"
    fontWeight={700}
    fontSize={2}
    mt={3}
    mb={2}
    {...props}
  />

export default H4