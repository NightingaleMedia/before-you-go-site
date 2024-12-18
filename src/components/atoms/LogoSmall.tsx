import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
const LogoHolder = styled.div<LogoSmall>`
  height: ${(props) => props.height || '300px'};
  width: auto;
  margin: 1rem auto;
  object-fit: contain;
  position: relative;
`

export type LogoSmall = {
  height?: string
}

const LogoSmall = ({ height }: LogoSmall): React.ReactNode | any => {
  return (
    <LogoHolder height={height}>
      <Image
        src={`/logo-2.png`}
        layout={'fill'}
        alt="logo"
        objectFit={'contain'}
      />
    </LogoHolder>
  )
}

export default LogoSmall
