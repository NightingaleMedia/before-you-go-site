import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { ArrowDownward, ArrowDropUp } from '@mui/icons-material'
import About__Tempate from '../templates/About__Tempate'
import { useState } from 'react'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowDropUp sx={{ fontSize: '2.5rem' }} />}
    {...props}
  />
))(({ theme, color = 'blue' }) => ({
  display: 'grid',
  paddingRight: '4%',
  paddingLeft: '4%',
  gridTemplateColumns: '1fr 30px',
  justifyItems: 'center',
  height: '55px',
  justifyContent: 'center',
  backgroundColor: color,
  top: '100%',
  marginTop: '0',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  '&.Mui-expanded': {
    // marginTop: '-100vh',
    zIndex: '1000',
    top: '0px',
    // top: '55px',
    width: '100%',
  },
  '&.sticky.Mui-expanded': {
    position: 'sticky',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'white',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  //   '& .MuiAccordionSummary-content': {
  //     marginLeft: theme.spacing(1),
  //   },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  minHeight: 'calc(100vh)',
  margin: '0',
  overflow: 'hidden',
  padding: '0',
}))

const SingleAccordion = ({
  name,
  handleChange,
  expanded,
  color = 'red',
  children,
}: {
  [x: string]: any
}) => {
  // TODO add props

  const [entered, setEntered] = useState(false)

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange(name)}
      TransitionProps={{
        unmountOnExit: true,
        timeout: 500,
        onEntered: (elem, isAppearing) => {
          console.log('entered')
          setEntered(true)
        },
        onExited: (elem) => {
          console.log('exited')
          setTimeout(() => {
            setEntered(false)
          }, 500)
        },
      }}
    >
      <AccordionSummary
        className={entered ? 'sticky' : 'unset'}
        aria-controls="panel3d-content"
        id="panel3d-header"
        sx={{
          backgroundColor: color,
        }}
      >
        <Typography variant="h5">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>{children}</div>
      </AccordionDetails>
    </Accordion>
  )
}

export default SingleAccordion
