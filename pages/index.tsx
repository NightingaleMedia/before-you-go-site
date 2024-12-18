import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import SingleDialButton from '../src/components/atoms/SingleDialButton'
import DialPad from '../src/components/DialPad'
import DialHero from '../src/components/DialHero'
import PictureBanner from '../src/components/Banners/PictureBanner'
import Accordion from '../src/components/Accordion'

const Dial = () => {
  return (
    <>
      <Head>
        <title>Dial</title>
      </Head>

      <DialHero />
      {/* <PictureBanner /> */}
      <Accordion />
    </>
  )
}

Dial.propTypes = {}

export default Dial
