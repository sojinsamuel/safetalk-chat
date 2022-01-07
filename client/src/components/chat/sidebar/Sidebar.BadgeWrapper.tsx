import React from 'react'
import styled from 'styled-components'
import GroupIcon from '@mui/icons-material/Group'
import Badge from '@mui/material/Badge'
import { motion } from 'framer-motion'
import { badgeAnimation } from './Sidebar.Animations'
import { badgeBoxMobile, badgeMobile } from './Sidebar.MediaQueries'

const BadgeBox = styled(motion.div)`
  margin-left: 18px;
  ${badgeBoxMobile}
`

const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    border-radius: 25px;
    width: 25px;
    height: 25px;
    background-color: ${props => props.theme.colors.grey.elevation_0};
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 400;
    ${badgeMobile}
  }
  & .MuiSvgIcon-root {
    font-size: 32px;
    color: ${props => props.theme.colors.secondary};
  }
`

const StyledGroupIcon = styled(GroupIcon)`
  font-size: 32px;
  color: ${props => props.theme.colors.secondary};
`

type BadgeWrapperProps = {
  users: Array<{ username: string; id: string }>
}

function BadgeWrapper(props: BadgeWrapperProps) {
  const { users } = props
  return (
    <BadgeBox
      variants={badgeAnimation}
      animate="closed"
      initial="closed"
      exit="open"
    >
      <StyledBadge badgeContent={users.length}>
        <StyledGroupIcon />
      </StyledBadge>
    </BadgeBox>
  )
}

export { BadgeWrapper }
