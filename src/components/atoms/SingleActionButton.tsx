import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import useSound from 'use-sound'
import { SingleDialButton__Props, StyledNumber } from './SingleDialButton'

const SingleActionButton = ({
  digit,
  onClick,
  name,
  className,
  audioUrl,
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
      className={className && className}
    >
      <div className={`number `}>{digit}</div>
      <div className="name">{name}</div>
    </StyledNumber>
  )
}

export default SingleActionButton
