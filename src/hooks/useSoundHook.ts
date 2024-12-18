import { useState } from 'react'
import useSound from 'use-sound'

const useSoundHook = () => {
  const [fileToPlay, setFileToPlay] = useState<any>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  //   const [play, { stop, sound }] = useSound(fileToPlay, {
  //     volume: 0.5,
  //     interrupt: true,
  //     onload: (id) => console.log('loaded: ', id),
  //     onloaderror: (err) => console.log('error: ', err),
  //     onstart: () => console.log('playing'),
  //     onfade: (id: any) => console.log('fade: ' + id),
  //     onend: () => setIsPlaying(false),
  //   })

  const play = () => {
    setIsPlaying(true)

    fileToPlay.play()
    fileToPlay.on('end')
  }

  const changeFile = (file: string) => {
    const audio = new Audio(file)
    setFileToPlay(audio)
  }

  return { play, changeFile, isPlaying }
}

export default useSoundHook
