import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { StyledBanner, StyledInner } from '../../styles/StyledBanner'
import { Grid, Typography } from '@mui/material'
import { ImageCentered } from '../../styles/ImageCentered'
import MicPhone from '../svg/phone-mic'
const StyledContainer = styled(StyledBanner)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  margin: auto;
  padding: 5rem 0;
`
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 500px;
  max-width: 500px;
  margin: auto;
`

const MicWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TextBlock = styled.div`
  margin: 1rem auto;
`
const OrangeBanner = () => {
  return (
    <StyledContainer>
      <StyledInner>
        <Grid container spacing={1} justifyContent={'center'}>
          <Grid item md={6}>
            <MicWrap>
              <MicPhone />
            </MicWrap>
          </Grid>
          <Grid item md={6}>
            <TextArea>
              <TextBlock>
                <Typography variant={`h4`}>
                  100 Interviews (and counting!)
                </Typography>
                <Typography variant={`body1`} color="white">
                  With people ages 30-105 from across the U.S. surrounding
                  questions about life, death, wishes, dreams and regrets.
                </Typography>
              </TextBlock>
              <TextBlock>
                <Typography variant={`h4`}>350+ Audio Clips</Typography>
                <Typography variant={`body1`} color="white">
                  About topics such as advice, legacy, helping others,
                  relationship with death, or wishes and regrets amongst others.
                </Typography>
              </TextBlock>
            </TextArea>
          </Grid>
        </Grid>
      </StyledInner>
    </StyledContainer>
  )
}

OrangeBanner.propTypes = {}

export default OrangeBanner
