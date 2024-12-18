import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Image from 'next/image'
import LogoSmall from './atoms/LogoSmall'
import useScroll, { ScrollProp } from '../hooks/useScroll'

const StyledHeaderWrap = styled.div`
  position: relative;
  min-height: 1100px;
  width: 100vw;
  background-image: url('/img/header.png');
  background-repeat: no-repeat;
  /* background-attachment: sticky; */
  background-position: center 110%;
  background-size: 100vw auto;
  z-index: 0;
  ${(props) => props.theme.breakpoints.down('md')} {
    background-position: center top;
    background-size: auto 100vh;
    min-height: 100vh;
  }
`

const StyledLogo = styled.div<ScrollProp>`
  position: absolute;
  z-index: -1;
  bottom: 22%;
  transform: translateY(${(props) => props.scroll / 3}px);
  /* prettier-ignore */

  /* prettier-ignore */
  right: 8%;
  height: auto;
  width: 25vw;
  height: 450px;
  ${(props) => props.theme.breakpoints.down('md')} {
    width: 250px;
    left: 0;
    height: 150px;
    right: 0;
    margin: auto;
    bottom: auto;
    top: 0;
  }
`
const Header = () => {
  const scroll = useScroll(0)
  return (
    <>
      <StyledHeaderWrap>
        {/* <Image
        src={`/img/header.png`}
        layout={"fill"}
        alt="logo"
        objectFit={"cover"}
      /> */}
        <StyledLogo scroll={scroll}>
          <LogoSmall height={'100%'} />
        </StyledLogo>
      </StyledHeaderWrap>
    </>
  )
}

Header.propTypes = {}

export default Header
