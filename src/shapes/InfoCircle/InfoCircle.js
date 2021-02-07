
import React, { useState } from 'react'

const COLOR = {

    bigCirc: {
        NATIVE: "white",
        HOVER: "white",
        ACTIVE: "black",
    },

    smolCirc: {
        NATIVE: "white",
        HOVER: "black",
        ACTIVE: "white"
    },

    inline: {
        NATIVE: "white",
        HOVER: "black",
        ACTIVE: "white",
    }

}

function InfoCircle() {

    const [emphasis, setEmphasis] = useState('NATIVE')

    const hover = () => { setEmphasis('HOVER') }
    const unHover = () => { setEmphasis('NATIVE') }
    const click = () => { setEmphasis('ACTIVE') }
    const unClick = () => { setEmphasis('HOVER') }

return (
<>
    <svg height="100" width="100"
    onMouseOver={hover} onMouseLeave={unHover}
    onMouseDown={click} onMouseUp={unClick}
    >

        <circle fill={COLOR.bigCirc[emphasis]} stroke="black"
        r="50" cx="50" cy="50" />

        <circle fill={COLOR.smolCirc[emphasis]} stroke="black"
        r="10" cx="50" cy="25"
        />

        <line 
        stroke="black" strokeWidth="18" strokeLinecap="butt"
        x1="50" y1="85"
        x2="50" y2="45"
        />
        <line 
        stroke={COLOR.inline[emphasis]} strokeWidth="15" strokeLinecap="butt"
        x1="50" y1="84"
        x2="50" y2="46"
        />
        


    </svg>
</>
)
}

export default InfoCircle
