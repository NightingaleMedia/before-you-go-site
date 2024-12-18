import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import StyledSpecial from '../../styles/StyledSpecial'
import { Typography } from '@mui/material'

const Holder = styled.div`
  height: 100%;
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 250px;
  margin: 2rem 0;
  && .image__callme {
    position: relative;
    align-self: flex-end;
    height: 100%;
    width: 200px;
    margin-right: 10%;
    text-align: right;
  }
  && .MuiTypography-h4 {
    position: absolute;
    z-index: 100;
    font-size: 3rem;
    right: 25%;
    top: 20%;
  }
`

const CallMe = () => {
  return (
    <>
      <Holder>
        <div className="image__callme">
          <Typography variant="h4">Call Me</Typography>
          <Image
            src={'/img/call-me.png'}
            layout={'fill'}
            alt="logo"
            objectFit={'contain'}
          />
        </div>
        <StyledSpecial text={'1-866-665-2036'} />
      </Holder>
    </>
  )
}

export default CallMe
