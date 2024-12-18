import React from 'react'
import styled from '@emotion/styled'
import { StyledBanner, StyledInner } from '../../styles/StyledBanner'
import { Typography } from '@mui/material'
import useScroll, { ScrollProp } from '../../hooks/useScroll'

const StyledContainer = styled(StyledBanner)`
  background-color: white;
`

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 600px 1fr;
  column-gap: 30px;
  min-height: 400px;

  ${(props) => props.theme.breakpoints.down('md')} {
    padding-top: 0px;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    min-height: unset;
  }
`

const BoothImage = styled.div<ScrollProp>`
  height: 100%;
  position: relative;
  /* transform: translateY(-${(props) => props.scroll / 20}%); */
  && img {
    width: 100%;
    max-width: 584px;
    position: absolute;
    bottom: -20%;
  }
  ${(props) => props.theme.breakpoints.down('md')} {
    height: 300px;
    grid-row: 2;
    && img {
      max-width: 400px;
      left: 0;
      /* bottom: 0; */
      right: 0;
      margin: 2rem auto;
      width: 90%;
      height: auto;
    }
  }
`

const TextArea = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${(props) => props.theme.breakpoints.down('md')} {
    grid-row: 1;
    margin-bottom: 2rem;
  }
`
const BannerStepping = () => {
  const scroll = useScroll(20)
  return (
    <StyledContainer>
      <StyledInner>
        <ContentContainer>
          <BoothImage scroll={scroll}>
            <img src={`https://placehold.co/584x432`}></img>
          </BoothImage>
          <TextArea>
            <Typography variant={`h3`}>
              Stepping into the booth gives a little glimpse into peoples lives.
            </Typography>
            <Typography variant={'body1'}>
              Into the ways we are both similar and different while providing a
              moment to reflect on who we are, who we’ve been and who we want to
              be; while, in turn, quietly encouraging us to ask the same of
              those we love.
            </Typography>
          </TextArea>
        </ContentContainer>
      </StyledInner>
    </StyledContainer>
  )
}

BannerStepping.propTypes = {}

export default BannerStepping
