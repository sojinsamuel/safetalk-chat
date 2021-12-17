import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import Box from '../../global/Box'
import Dropzone from './Dropzone'
import DarkenBackground from '../../global/DarkenBackground'
import Preview from './Dropzone.Preview'
import { DropFile } from '../../../lib/interfaces'

const OuterBox = styled(Box)`
  align-items: flex-start;
  background-color: ${props => props.theme.colors.secondary.dark.elevation_0};
  border-radius: 25px 5px 5px 5px;
  height: 80vh;
  width: inherit;
  position: relative;
`

function MessagesBox() {
  const [isDragOver, setDragOver] = useState(false)
  const dropzoneRef = useRef<HTMLDivElement | null>(null)

  return (
    <OuterBox
      onDragEnter={e => {
        setDragOver(true)
      }}
      onDragLeave={e => {
        if (e.relatedTarget !== dropzoneRef.current) {
          setDragOver(false)
        }
      }}
    >
      {isDragOver ? (
        <Dropzone
          open={setDragOver}
          render={(files: DropFile[]) => (
            <Preview open={setDragOver} files={files} />
          )}
          ref={dropzoneRef}
        />
      ) : null}
    </OuterBox>
  )
}

export default MessagesBox
