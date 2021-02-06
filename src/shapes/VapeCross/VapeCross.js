

import './vCross.css'
import React, { useState, useEffect } from 'react'

const sWidth = "10"
const color = (col) => {

    return `rgb(${col}, ${col}, ${col})`

}
const offset = 10

const genCoord = (base, offset) => {
    return (base + offset).toString()
}

function VapeCross() {

    const [changeOffset, setChangeOffset] = useState(offset)
    const [changeColor, setChangeColor] = useState(0)

    useEffect(() => {
        // offset
        const offsetInterval = setInterval(() => {
            setChangeOffset((offset) => {
                if (offset < 45) {
                    return offset+1
                } else {
                    setChangeColor(0)
                    return 10
                }
            })
        }, 36.42857142)

        // coloration
        const colorInterval = setInterval(() => {
            setChangeColor((color) => {
                if (color < 255) {
                    return color+1
                } else {
                    return 0
                }
            })
        }, 5)

        // rotation

        // clear fn
        const clear = () => {
            clearInterval(offsetInterval)
            clearInterval(colorInterval)
        }

        return clear

    }, [])

return (
<>
<svg height="100px" width="100px">
    {/* top left */}
    <line className='vapeCross_line'
    x1="0" y1="0"
    x2={genCoord( 50, -changeOffset )} y2={genCoord( 50, -changeOffset )}
    strokeWidth={sWidth} stroke={color(changeColor)}
    />

    {/* top right */}
    <line className='vapeCross_line'
    x1="100" y1="0" 
    x2={genCoord( 50, changeOffset )} y2={genCoord( 50, -changeOffset )}
    strokeWidth={sWidth} stroke={color(changeColor)}
    />

    {/* bottom left */}
    <line className='vapeCross_line'
    x1="0" y1="100"
    x2={genCoord( 50, -changeOffset )} y2={genCoord( 50, changeOffset )}
    strokeWidth={sWidth} stroke={color(changeColor)}
    />

    {/* bottom right */}
    <line className='vapeCross_line'
    x1={genCoord( 50, changeOffset )} y1={genCoord( 50, changeOffset )} 
    x2="100" y2="100"
    strokeWidth={sWidth} stroke={color(changeColor)}
    />

</svg>
</>
)
}

export default VapeCross
