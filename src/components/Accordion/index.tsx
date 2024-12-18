import SingleAccordion from './SingleAccordion'
import { useEffect, useState } from 'react'
import About__Tempate from '../templates/About__Tempate'
import { Typography, useTheme } from '@mui/material'
import styled from '@emotion/styled'

const StyledWrap = styled.div`
  position: sticky;
  z-index: 1000;
  bottom: 0;
  @media all and (max-width: 768px) {
    position: relative;
    bottom: unset;
  }
`
export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState<string | false>(false)

  const theme = useTheme()
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  useEffect(() => {
    if (expanded) {
      window.scrollTo(0, 1920)
    }
  }, [expanded])

  return (
    <StyledWrap>
      <SingleAccordion
        name={'About'}
        expanded={expanded === 'About'}
        handleChange={handleChange}
        color={theme.palette.primary.main}
      >
        <About__Tempate />
      </SingleAccordion>
      <SingleAccordion
        name={'Get In Touch'}
        color={theme.palette.secondary.main}
        expanded={expanded === 'Get In Touch'}
        handleChange={handleChange}
      >
        <Typography> Donate </Typography>
      </SingleAccordion>
      <SingleAccordion
        name={'Donate'}
        color="#56CAB9"
        expanded={expanded === 'Donate'}
        handleChange={handleChange}
      >
        <Typography> Donate </Typography>
      </SingleAccordion>
    </StyledWrap>
  )
}
