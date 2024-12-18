import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import useSound from 'use-sound'

export const StyledNumber = styled(Button)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 100%;
  height: 0;
  width: 20%;
  /* padding-top: 20%; */
  min-width: 85px;
  min-height: 85px;
  display: grid;
  margin: auto;
  grid-template-rows: 70% 10px;
  align-items: center;
  position: relative;
  transition: all 0.5s ease;
  &&:disabled {
    background-color: ${({ theme }) => theme.palette.grey[200]};
  }
  &&.record {
    background-color: ${(props) => props.theme.palette.error.main};
  }
  &&.play {
    background-color: ${(props) => props.theme.palette.success.light};
  }
  &&:hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
    cursor: pointer;
  }
  && div.number {
    /* position: absolute; */
    top: 0%;
    font-size: clamp(1rem, 14vw, 2rem);
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
  && div.name {
    /* position: absolute; */
    margin-top: 0px;
    text-align: center;
    font-size: clamp(0.5rem, 0.6vw, 18px);
    line-height: 10px;
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
  && .MuiSvgIcon-root {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 15%;
    font-size: clamp(0.75rem, 10vw, 2.25rem);
  }
`

export type SingleDialButton__Props = {
  digit: string
  displayElem?: string | JSX.Element | React.ReactNode
  onClick: () => {} | any
  name: string
  type: 'selector' | 'action' | 'ignored' | string
  audioUrl?: string | null
  className?: string
  disabled?: boolean
}
const SingleDialButton = ({
  digit,
  displayElem,
  onClick,
  name,
  className,
  audioUrl,
  disabled,
}: SingleDialButton__Props) => {
  const [play, { stop, sound }] = useSound('/DTMF/' + audioUrl, {
    volume: 0.5,
    interrupt: false,
    id: name,
    onfade: (id: any) => console.log('fade: ' + id),
    soundEnabled: true,
  })

  return (
    <StyledNumber
      onClick={onClick}
      onMouseDownCapture={(e) => {
        play()
      }}
      onMouseUpCapture={() => {
        // sound.fade(0.5, 0, 100)
        setTimeout(stop, 100)
      }}
      disabled={disabled}
      className={className && className}
    >
      <div className={`number `}>{displayElem ? displayElem : digit}</div>
      <div className="name">{name}</div>
    </StyledNumber>
  )
}

export default SingleDialButton
