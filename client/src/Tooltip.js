import React from 'react'
import styled from 'styled-components';

const Tooltip = (props) => {
    return (
        <StyledTooltip>
            {props.text}
        </StyledTooltip>
    )
}

const StyledTooltip = styled.div`
    transition-delay: 2s;
    position: absolute;
    top: 70px;
    left: 360px;
    padding: 6px 8px;
    background-color: black;
    color: white;
    display: inline-block;
    border-radius: 3px;
    font-size: 13px;
    margin-right: 10px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
    overflow: hidden;
    white-space: nowrap;
`

export default Tooltip;