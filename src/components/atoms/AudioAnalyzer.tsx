import React, { useEffect, useRef, useState } from 'react'

const AudioAnalyzer = ({ audio }: { audio: any }) => {
  const [audioData, setAudioData] = useState(new Uint8Array(0))
  let analyser: AnalyserNode | any = useRef()
  let dataArray: any = useRef()
  let rafId: any = useRef()

  useEffect(() => {
    const audioContext = new window.AudioContext()
    analyser.current = audioContext.createAnalyser()

    dataArray.current = new Uint8Array(analyser.frequencyBinCount)
    const source = audioContext.createMediaStreamSource(audio)
    source.connect(analyser)
    rafId.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafId)
      analyser.disconnect()
      source.disconnect()
    }
  }, [])

  const tick = () => {
    if (analyser) {
      analyser.getByteTimeDomainData(dataArray)
      setAudioData(dataArray)
      rafId = requestAnimationFrame(tick)
    }
  }
  return <AudioVisualizer audioData={audioData} />
}

const AudioVisualizer = ({ audioData }: { audioData: any }) => {
  const canvas: any = useRef()

  useEffect(() => {
    draw()
  })

  function draw() {
    const c: any = canvas.current
    const height = c.height
    const width = c.width
    const context = c.getContext('2d')
    let x = 0
    const sliceWidth = (width * 1.0) / audioData.length

    context.lineWidth = 2
    context.strokeStyle = '#000000'
    context.clearRect(0, 0, width, height)

    context.beginPath()
    context.moveTo(0, height / 2)
    for (const item of audioData) {
      const y = (item / 255.0) * height
      context.lineTo(x, y)
      x += sliceWidth
    }
    context.lineTo(x, height / 2)
    context.stroke()
  }

  return <canvas width="300" height="300" ref={canvas} />
}

export default AudioAnalyzer
