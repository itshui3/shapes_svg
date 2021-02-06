

import './vCross.css'
import React from 'react'

const sWidth = "10"
const color = "black"
const offset = 25

const genCoord = (base, offset) => {
    return (base + offset).toString()
}

function VapeCross() {
return (
<>
<svg height="100px" width="100px">
    {/* top left */}
    <line className='vapeCross_line'
    x1="0" y1="0"
    x2={genCoord( 50, -offset )} y2={genCoord( 50, -offset )}
    strokeWidth={sWidth} stroke={color}
    />

    {/* top right */}
    <line className='vapeCross_line'
    x1="100" y1="0" 
    x2={genCoord( 50, offset )} y2={genCoord( 50, -offset )}
    strokeWidth={sWidth} stroke={color}
    />

    {/* bottom left */}
    <line className='vapeCross_line'
    x1="0" y1="100"
    x2={genCoord( 50, -offset )} y2={genCoord( 50, offset )}
    strokeWidth={sWidth} stroke={color}
    />

    {/* bottom right */}
    <line className='vapeCross_line'
    x1={genCoord( 50, offset )} y1={genCoord( 50, offset )} 
    x2="100" y2="100"
    strokeWidth={sWidth} stroke={color}
    />

</svg>
</>
)
}

export default VapeCross
