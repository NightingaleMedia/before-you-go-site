import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Dial from '../../../pages'
import useSound from 'use-sound'
import SingleDialButton, {
  SingleDialButton__Props,
} from '../atoms/SingleDialButton'
import MicIcon from '@mui/icons-material/Mic'
import styled from '@emotion/styled'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import StyledSpecial from '../../styles/StyledSpecial'
import SingleActionButton from '../atoms/SingleActionButton'
import {
  Button,
  Dialog,
  Fade,
  LinearProgress,
  Slide,
  Typography,
} from '@mui/material'
import PlayButton from '../atoms/PlayButton'
import useSoundHook from '../../hooks/useSoundHook'
import ReactHowler from 'react-howler'
import { Box } from '@mui/system'
import { InfoArea, StyledDialPad } from './Styles'
import AudioVisualizer from '../atoms/AudioAnalyzer'
import AudioAnalyzer from '../atoms/AudioAnalyzer'

const getAudio = async (digit: any): Promise<any> => {
  return await fetch(
    `https://5kqkwdotf9.execute-api.us-east-1.amazonaws.com/api-dev/byg/web/listen/${digit}`,
    {
      headers: {
        authorization: `AWS ${process.env.AWS_KEY}:${process.env.AWS_SIG}`,
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.data.track_audio_url)
}

const DialArray: SingleDialButton__Props[] = [
  {
    digit: '1',
    type: 'selector',
    name: 'Advice',
    audioUrl: 'DTMF-1.wav',
    onClick: () => {},
  },
  {
    digit: '2',
    type: 'selector',
    name: 'Legacy',
    audioUrl: 'DTMF-2.wav',
    onClick: () => {},
  },
  {
    digit: '3',
    type: 'selector',
    name: 'Help',
    audioUrl: 'DTMF-3.wav',
    onClick: () => {},
  },
  {
    digit: '4',
    type: 'selector',
    name: 'Death',
    audioUrl: 'DTMF-4.wav',
    onClick: () => {},
  },
  {
    digit: '5',
    type: 'selector',
    name: 'Wishes',
    audioUrl: 'DTMF-5.wav',
    onClick: () => {},
  },
  {
    digit: '6',
    type: 'selector',
    name: 'Family',
    audioUrl: 'DTMF-6.wav',
    onClick: () => {},
  },
  {
    digit: '7',
    type: 'selector',
    name: 'Travel',
    audioUrl: 'DTMF-7.wav',
    onClick: () => {},
  },
  {
    digit: '8',
    type: 'selector',
    name: 'Beliefs',
    audioUrl: 'DTMF-8.wav',
    onClick: () => {},
  },
  {
    digit: '9',
    type: 'selector',
    name: 'Perspective',
    audioUrl: 'DTMF-9.wav',
    onClick: () => {},
  },
]

const ActionButtons = [
  {
    digit: '*',
    displayElem: <MicIcon />,
    type: 'action',
    name: 'Record',
    onClick: () => {},
    className: 'record',
  },
  {
    digit: '0',
    displayElem: '0',
    type: 'ignored',
    name: 'Donate',
    onClick: () => {},
    className: '',
  },
  {
    digit: '#',
    displayElem: <PlayCircleOutlineIcon />,
    type: 'action',
    name: 'Listen',
    onClick: () => {},
    className: 'play',
  },
]
type DialPad__Props = {
  onPlay: any
  onEnd: any
}

type Transport = 'playing' | 'loading' | 'recording' | 'catSelected' | 'init'

const renderSec = (secs: number) => {
  let remain: any = secs % 60
  let mins = Math.floor(secs / 60)

  if (remain < 10) {
    remain = '0' + remain
  }
  return `${mins}:${remain}`
}
const init = {
  playing: false,
  recording: false,
  loading: false,
  prompt:
    'Choose a category, select “Listen” to hear or "Record" to contribute',
}

const states = {
  init: {
    component:
      'Choose a category, select “Listen” to hear or "Record" to contribute',
  },
  loading: { component: <div>Loading</div> },
  catSelect: {
    component: null,
  },
  playing: {
    component: <div>Test</div>,
  },
  recording: {
    component: <div>Recording</div>,
  },
}

const DialPad = ({ onPlay, onEnd }: DialPad__Props) => {
  const [selectedValue, setSelectedValue] = useState<any>(null)
  const [fileToPlay, setFileToPlay] = useState<string | null>(null)
  const [transport, setTransport] = useState<Transport>('init')
  const [playingDur, setPlayingDur] = useState<{ start: any; end: any }>({
    start: 0,
    end: 0,
  })
  // const { changeFile, play, isPlaying } = useSoundHook()

  useEffect(() => {
    if (selectedValue) {
      setTransport('loading')
      getAudio(selectedValue.digit)
        .then((file: string) => {
          const audio = new Audio(file)
          audio.addEventListener('loadedmetadata', () => {
            let d = Math.floor(audio.duration)
            setPlayingDur({ start: 1, end: d })
          })
          setTransport('catSelected')
          setFileToPlay(file)
        })
        .finally()
    }
  }, [selectedValue])

  function handleEnd() {
    setTransport('init')
    setSelectedValue(null)
    onEnd()
  }

  function handleStop() {
    handleEnd()
    setFileToPlay(null)
  }

  useEffect(() => {
    let interval: any
    if (transport === 'playing') {
      onPlay()
      setPlayingDur((prev) => ({ ...prev, start: 0 }))
      let timer = 0
      interval = setInterval(() => {
        timer++
        const calcEnd = Math.round((timer / playingDur.end) * 100)
        setPlayingDur((prev) => ({ ...prev, start: calcEnd }))
        console.log(timer)
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [transport])

  const handleRecordStart = () => {
    if (!selectedValue) {
      return setTransport('init')
    }
    setTransport('recording')
  }

  const play = () => {
    if (!selectedValue) {
      return setTransport('init')
    }
    if (transport === 'loading') {
      return
    }
    setTransport('playing')
  }

  return (
    <>
      <InfoArea>
        <Fade in={selectedValue?.digit || transport === 'init'}>
          <div className="display">
            {
              {
                init: (
                  <div style={{ fontSize: '1rem' }}>
                    Choose a category, select{' '}
                    <span style={{ color: 'orange' }}>Listen</span> to hear or{' '}
                    <span style={{ color: 'orange' }}>Record</span> to
                    contribute
                  </div>
                ),
                loading: (
                  <div>
                    <Typography variant={'body1'}>
                      {selectedValue?.name}
                    </Typography>
                    <LinearProgress />
                  </div>
                ),
                playing: (
                  <div>
                    <Typography variant={'body1'}>
                      {selectedValue?.name}
                    </Typography>
                    <LinearProgress
                      value={playingDur.start}
                      variant="determinate"
                      color={'secondary'}
                    />
                  </div>
                ),
                recording: <div>recording</div>,
                catSelected: (
                  <Typography variant={'body1'}>
                    {selectedValue?.name}
                  </Typography>
                ),
              }[transport]
            }
          </div>
        </Fade>
      </InfoArea>
      <StyledDialPad>
        {DialArray.map((d, index) => (
          <SingleDialButton
            key={d.name}
            {...d}
            disabled={transport === 'playing'}
            onClick={() => setSelectedValue(d)}
          />
        ))}
        <SingleActionButton {...ActionButtons[0]} onClick={handleRecordStart} />
        <SingleDialButton
          {...ActionButtons[1]}
          audioUrl={fileToPlay}
          disabled={transport === 'playing'}
          onClick={() => console.log('yed')}
        />
        <PlayButton
          {...ActionButtons[2]}
          onClick={play}
          disabled={!selectedValue}
        />
      </StyledDialPad>
      {fileToPlay && (
        <ReactHowler
          playing={transport === 'playing'}
          src={fileToPlay}
          onEnd={handleEnd}
          onError={(err: any) => alert(err)}
        />
      )}
      <Box sx={{ mt: 4, mx: 'auto' }}>
        <Typography variant={`overline`} color="error" onClick={handleStop}>
          Stop (For Testing Only)
        </Typography>
      </Box>
      <Dialog open={true}>
        <div>
          <h1>RECORD</h1>
        </div>
      </Dialog>
    </>
  )
}

DialPad.propTypes = {}

export default DialPad

// .map((b) => {
//   const action = () => {
//     switch (b.digit) {
//       case '#':
//         return () => alert('RECORD')

//       case '0':
//         return () => alert('ZERO')

//       case '*':
//         return () => alert('PLAY')
//     }
//   }
//   b.onClick = action()
//   return b
// })
