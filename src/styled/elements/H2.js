// styled-components based extension
import React from 'react'
import styled from 'styled-components'
import Headline from './Headline'

const H2 = props =>
  <Headline
    {...props}
    as="h2"
    fontSize={[5, 6]}
    fontWeight={400}
    mt={2}
  />

export default H2