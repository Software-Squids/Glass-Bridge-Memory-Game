import React from 'react'
import styled from 'styled-components'

const StyledScoreboard = styled.div`
  .page-header {
    padding: 20px;

    .info-here {
      font-size: 12px;
    }

    &:hover {
      /* do stuff */
    }
  }
`

export const Scoreboard = () => {

  return (
    // HTML in JSX
    <StyledScoreboard>
      <h1 className="page-header">
        Squid Games
        <span className="info-icon">info here</span>
      </h1>

      <p>New Game</p>
    </StyledScoreboard>
  )
}

