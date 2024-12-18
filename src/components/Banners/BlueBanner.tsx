import React from 'react'
import styled from '@emotion/styled'
import { StyledBanner, StyledInner } from '../../styles/StyledBanner'
import { Container, Grid, Typography } from '@mui/material'

const StyledContainer = styled(StyledBanner)`
  background-color: ${({ theme }) => theme.palette.secondary.main};

  padding: 5rem 0;
  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 6rem 0;
  }
`

const BannerInner = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: center;
  && .image__div {
    text-align: center;
  }
  && .image__div img {
    max-width: 350px;
  }
  && .winner-pic {
    border-radius: 100%;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    grid-template-columns: 100%;
    && .image__div img {
      width: 60%;
      max-width: 400px;
      margin: 2rem auto;
    }
    && .text__div {
      text-align: center;
    }
  }
`
const BlueBanner = () => {
  return (
    <StyledContainer>
      <StyledInner>
        <BannerInner>
          <div className="image__div">
            <img className="winner-pic" src={`/img/artprize.png`} />
          </div>
          <div className="text__div">
            <Typography variant={`h2`}>
              Winner of the $50,000 Public Vote Grand Prize for most visitor
              interaction at ArtPrize 2021.
            </Typography>
          </div>
        </BannerInner>
      </StyledInner>
    </StyledContainer>
  )
}

export default BlueBanner
