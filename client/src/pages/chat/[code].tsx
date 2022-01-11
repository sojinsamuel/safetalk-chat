import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import styled from 'styled-components'
import MessagesBox from '../../components/chat/messages/Messages'
import SendMessage from '../../components/chat/sendMessage/SendMessage'
import Box from '../../components/global/Box'
import ErrorAlert from '../../components/global/ErrorAlert'
import { fileContext } from '../../lib/context/fileContext'
import { DropFile } from '../../lib/interfaces'
import FilePreview from '../../components/chat/filePreview/FilePreview'
import DarkenBackground from '../../components/global/DarkenBackground'
import ChatSidebar from '../../components/chat/sidebar/Sidebar'
import { AnimatePresence } from 'framer-motion'
import {
  ChatBoxDesktop,
  ChatBoxMobile,
  ChatContainerDesktop,
  ChatHeaderMobile
} from './_chat.MediaQueries'

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  ${ChatContainerDesktop}
`

const ChatBox = styled(Box)`
  width: 70%;
  height: 90%;
  margin-top: 30px;
  ${ChatBoxDesktop}
  ${ChatBoxMobile}
`

const ChatHeader = styled.div`
  display: none;
  ${ChatHeaderMobile}
`

const Chat: NextPage = props => {
  const [files, setFiles] = useState<Array<DropFile>>([])
  const [showPreview, setPreview] = useState(false)
  const dispatch = useAppDispatch()
  const roomCode = useAppSelector(state => state.user.roomCode)
  const socketID = useAppSelector(state => state.user.socketID)
  const username = useAppSelector(state => state.user.username)
  const error = useAppSelector(state => state.app.error)

  const clearPreview = () => {
    files.forEach(file => {
      URL.revokeObjectURL(file.preview)
    })
    setFiles([])
  }

  const closeWithoutSave = () => {
    clearPreview()
    setPreview(false)
  }

  const closePreview = () => {
    setPreview(false)
  }

  useEffect(() => {
    if (files.length > 0) {
      setPreview(true)
    }
  }, [files])

  useEffect(() => {
    if (!username || !socketID || !roomCode) {
      window.location.href = '/'
    }
  }, [])

  return (
    <>
      <fileContext.Provider value={{ files, setFiles }}>
        <>
          <ChatContainer id="chatContainer">
            <ChatBox>
              <ChatHeader />
              <MessagesBox />
              <SendMessage />
            </ChatBox>
          </ChatContainer>
          <ChatSidebar />
        </>
      </fileContext.Provider>
      <AnimatePresence>
        {showPreview && (
          <FilePreview
            files={files}
            close={closePreview}
            closeWithoutSave={closeWithoutSave}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {error && <ErrorAlert error={error} key={'chatPageError'} />}
      </AnimatePresence>
    </>
  )
}

export default Chat
