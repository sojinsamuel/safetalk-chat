import { Paper, Popper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

type CodePopperProps = {
  open: boolean
  anchorEl: Element | null
  message: string
}

const CodePopper = (props: CodePopperProps) => {
  const { open, anchorEl, message } = props
  return (
    <Popper open={open} anchorEl={anchorEl} placement="top">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
        exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
      >
        <Paper
          sx={{
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px'
          }}
        >
          {message}
        </Paper>
      </motion.div>
    </Popper>
  )
}

export default CodePopper
