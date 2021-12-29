import React, { useRef } from 'react'
import MediaPlayer from '../molecules/MediaPlayer'
import AudioPlayer from './AudioPlayer'

type AudioMessageProps = {
  src: string
  type: string
}

function AudioMessage(props: AudioMessageProps) {
  const { src } = props
  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <>
      <audio ref={audioRef}>
        <source src={src} type="audio/mp3" />
      </audio>
      <MediaPlayer
        media={audioRef}
        render={(
          PlayerVolume,
          PlayerSlider,
          PlayerButton,
          MediaCurrentTime,
          MediaDuration
        ) => (
          <AudioPlayer
            PlayerVolume={PlayerVolume}
            PlayerSlider={PlayerSlider}
            PlayerButton={PlayerButton}
            MediaDuration={MediaDuration}
            MediaCurrentTime={MediaCurrentTime}
          />
        )}
      />
    </>
  )
}

export { AudioMessage }