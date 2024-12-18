import React from 'react'
import BannerCallMe from '../Banners/BannerCallMe'
import BannerStepping from '../Banners/BannerStepping'
import BlueBanner from '../Banners/BlueBanner'
import OrangeBanner from '../Banners/OrangeBanner'
import PictureBanner from '../Banners/PictureBanner'
import Header from '../Header'

const About__Tempate = () => {
  return (
    <>
      <Header />
      <BannerStepping />
      <BlueBanner />
      <BannerCallMe />
      <OrangeBanner />
      <PictureBanner />
    </>
  )
}

export default About__Tempate
