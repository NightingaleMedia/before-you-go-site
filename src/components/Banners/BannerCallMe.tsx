import React from 'react'
import styled from '@emotion/styled'
import { StyledBanner, StyledInner } from '../../styles/StyledBanner'
import { Button, Grid, Typography } from '@mui/material'
import { ImageCentered } from '../../styles/ImageCentered'
import StyledSpecial from '../../styles/StyledSpecial'
import Image from 'next/image'
import CallMe from '../atoms/CallMe'

const StyledContainer = styled(StyledBanner)`
  background-color: white;
  min-height: 600px;
`
const BoothImage = styled.img`
  margin: auto;
  margin-top: -150px;

  @media all and (max-width: 1000px) {
    grid-row: 1;
    margin: auto;
    margin-top: -180px;
    width: 96%;
  }
`
const CallImage = styled.img`
  max-width: 400px;
  @media all and (max-width: 1300px) {
    width: 80%;
  }
`

const CallInner = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  && .text__div {
    text-align: center;
    width: 100%;
  }
  && .image__div {
    margin: auto;
  }
  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 0;
    padding-bottom: 4rem;
    grid-template-columns: 100%;
    grid-template-rows: 350px 400px;
    && .text__div {
      grid-row: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      text-align: center;
    }
    && .image__div {
      grid-row: 1;
      margin: auto;
      margin-top: 120px;
      text-align: center;
    }
  }
`

//
// font-family: kopius, serif;
// font-weight: 700;
// font-style: italic;
const BannerCallMe = () => {
  return (
    <StyledContainer>
      <StyledInner>
        <CallInner>
          <div className="text__div">
            <CallMe />
            <Button>Click Me To Get Involved</Button>
          </div>
          <div className="image__div">
            <BoothImage
              alt="picture of the booth"
              src={`https://placehold.co/580x440`}
            />
          </div>
        </CallInner>
      </StyledInner>
    </StyledContainer>
  )
}

BannerCallMe.propTypes = {}

export default BannerCallMe
