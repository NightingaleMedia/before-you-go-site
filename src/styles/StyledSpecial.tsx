import { Typography } from '@mui/material'
import styled from '@emotion/styled'

const StyledComp = styled.div`
  position: relative;
  z-index: 1;
  && .MuiTypography-root {
    z-index: 100;
  }
`
const After = styled.div`
  ${(props) => props.theme.typography.special}
  /* font-size: 4rem; */
  /* line-height: 5rem; */
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  color: #4297cb;
  top: 0px;
  z-index: -1;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke: 20px #4297cb;
`
const StyledSpecial = ({ text }: { text: string | number }) => {
  return (
    <StyledComp>
      <Typography variant={'special'}>{text}</Typography>
      <After>{text}</After>
    </StyledComp>
  )
}

export default StyledSpecial
