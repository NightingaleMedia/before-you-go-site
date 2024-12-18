import styled from '@emotion/styled'

export const StyledBanner = styled.div`
  min-height: 550px;
`
export const StyledInner = styled.div`
  max-width: 1600px;
  /* overflow: hidden; */
  /* padding: 0 2rem; */
  margin: auto;

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 0 5% 0 5%;
  }
`
