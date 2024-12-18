import styled from '@emotion/styled'

export const InfoArea = styled.div`
  height: 74px;
  margin: 1rem auto;
  text-align: center;
  && .MuiTypography-root {
    line-height: 1.45rem;
  }
  && .MuiLinearProgress-root {
    margin: 12px auto;
    max-width: 80px;
  }
  && .display {
    max-width: 250px;
    margin: auto;
    text-align: center;
  }
`

export const StyledDialPad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 95px));
  row-gap: 1rem;
  margin: auto;
  max-width: 320px;
`
