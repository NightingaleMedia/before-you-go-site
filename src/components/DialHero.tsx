import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import DialPad from './DialPad'
import LogoSmall from './atoms/LogoSmall'

type Hero = {
  playing: boolean
}

const Hero = styled.div<Hero>`
  min-height: calc(100vh);
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  /* background-color: ${(props) => (props.playing ? '#1c1c1c' : 'white')}; */
  transition: all 0.5s ease;
`

const DialInner = styled.div``
const DialHero = () => {
  const [playing, setPlaying] = useState(false)

  return (
    <Hero playing={playing}>
      {/* <div style={{ minHeight: '100vh' }} /> */}
      <DialInner>
        <div style={{ height: 'auto', width: '100%' }}>
          <LogoSmall height={`120px`} />
        </div>
        <DialPad
          onPlay={() => setPlaying(true)}
          onEnd={() => setPlaying(false)}
        />
      </DialInner>
    </Hero>
  )
}

DialHero.propTypes = {}

export default DialHero
