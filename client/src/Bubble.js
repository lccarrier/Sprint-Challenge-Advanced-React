import React from 'react'
import styled from 'styled-components'
import useHover from './useHover'
import Tooltip from './Tooltip'

const Bubble = () => {

    const [ref, hovered] = useHover()

    return (
        <StyledDiv ref={ref}>
            <StyledP>?</StyledP>
            {hovered && 
                    <Tooltip 
                        text="This is a Lambda Project" 
                    />}

        </StyledDiv>
    )
}

const StyledDiv = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: black;
  cursor: pointer
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 10px;
`

const StyledP = styled.p`
  display: block;
  text-align: center;
  height: auto;
  font-size: 16px;
  color: white;
`

export default Bubble;


