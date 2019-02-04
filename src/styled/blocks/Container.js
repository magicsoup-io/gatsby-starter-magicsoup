// styled-components based extension
import styled from 'styled-components'
import { Box } from '@magicsoup.io/stock'

const Container = styled(Box)({
  maxWidth: '1080px',
})

Container.defaultProps = {
  mx: 'auto',
  px: 2
}

export default Container