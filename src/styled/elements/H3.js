// styled-components based extension
import React from 'react'
import styled from 'styled-components'

import Headline from './Headline'

const H3 = props =>
  <Headline
    {...props}
    as="h3"
    fontWeight={400}
    fontSize={[4, 5]}
    mt={2}
    mb={4}
  />

export default H3