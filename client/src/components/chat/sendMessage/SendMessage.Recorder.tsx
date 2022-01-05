import React, { useEffect } from 'react'
import Box from '../../global/Box'
import styled from 'styled-components'
import OutlinedButton from '../../global/Button.Outlined'
import Check from '@material-ui/icons/Check'
import Close from '@material-ui/icons/Close'
import useTimer from '../../../lib/hooks/useTimer'
import { RecorderMobile } from './SendMessage.MediaQueries'
import { HTMLMotionProps } from 'framer-motion/types/render/html/types'
import { motion } from 'framer-motion'

const InnerBox = styled(Box)`
  margin: 0 20px 0 20px;
`

const MainBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 250px;
  height: 50px;

  ${RecorderMobile}
`

const Timer = styled.span`
  font-weight: bold;
`

type RecordAudioProps = React.HTMLAttributes<HTMLDivElement> &
  HTMLMotionProps<'div'> & {
    cancel: () => void
    finish: () => void
  }

const recorderAnimation = {
  visible: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.5
    }
  },
  hidden: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.3
    }
  }
}

function RecordAudio(props: RecordAudioProps) {
  const { second, minute, initTimer, stopTimer } = useTimer()

  useEffect(() => {
    initTimer()
    return () => {
      stopTimer()
    }
  }, [])

  return (
    <MainBox variants={recorderAnimation} animate={'visible'} exit={'hidden'}>
      <OutlinedButton onClick={props.cancel}>
        <Close />
      </OutlinedButton>

      <InnerBox id="recordTimerBox" direction="row">
        <Timer>
          {minute}:{second}
        </Timer>
      </InnerBox>

      <OutlinedButton onClick={props.finish}>
        <Check />
      </OutlinedButton>
    </MainBox>
  )
}

export default RecordAudio
