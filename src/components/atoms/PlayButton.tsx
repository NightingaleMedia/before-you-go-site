import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import useSound from 'use-sound'
import { SingleDialButton__Props, StyledNumber } from './SingleDialButton'

const PlayButton = ({
  digit,
  onClick,
  name,
  className,
  audioUrl,
}: SingleDialButton__Props) => {
  return (
    <StyledNumber onClick={onClick} className={className ? className : ''}>
      <div className={`number `}>{digit}</div>
      <div className="name">{name}</div>
    </StyledNumber>
  )
}

export default PlayButton
