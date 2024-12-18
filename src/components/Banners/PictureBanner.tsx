import React from 'react'
import styled from '@emotion/styled'

const StickyDiv = styled.div`
  position: sticky;
  top: 0px;
  margin-bottom: -10px;
  z-index: -1;
  max-height: 100vh;
  overflow: hidden;
  z-index: 999;
  && img {
    width: 100vw;
    height: auto;
  }
  @media all and (max-width: 1300px) {
    && img {
      height: 100vh;
      width: auto;
      transform: translate(-24%, 0);
    }
  }
`
const PictureBanner = () => {
  return (
    <StickyDiv>
      <img src={`/img/bg1.png`}></img>
    </StickyDiv>
  )
}

PictureBanner.propTypes = {}

export default PictureBanner
