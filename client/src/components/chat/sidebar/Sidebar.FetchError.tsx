import React from 'react'
import styled from 'styled-components'
import RegularTextStyle from '../../../assets/styles/default.RegularText'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'

const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ErrorMessage = styled.p`
  ${RegularTextStyle}
  margin-top: 10px;
`

function FetchError() {
  return (
    <ErrorBox>
      <ErrorOutlineIcon sx={{ fontSize: 32, color: 'error.main' }} />
      <ErrorMessage bold>Unable to fetch users list</ErrorMessage>
    </ErrorBox>
  )
}

export default FetchError
