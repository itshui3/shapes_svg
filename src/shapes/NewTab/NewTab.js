

import React, { useState, useEffect, useReducer } from 'react'

import {
    initOffset,
    OFFSET,
    offsetReducer
} from './offsetReducer.js'

const { ACTION } = OFFSET
const { HOVER, UNHOVER, INCR, ASSIGN_INT, CLEAR_INT, RESET } = ACTION

function NewTab() {

    // const [offset, setOffset] = useState(5)
    const [offset, dispatchOffset] = useReducer(offsetReducer, initOffset)

    useEffect(() => {
        if (offset.hover) {
            dispatchOffset({ type: ASSIGN_INT, payload: setInterval(() => {

                dispatchOffset({ type: INCR })
    
            }, 15)})
        } else {
            dispatchOffset({ type: CLEAR_INT })
            dispatchOffset({ type: RESET })
        }

        return () => clearInterval(offset.int)

    }, [offset.hover])

return (
<>
    <div className='newTab_cont'>
        <svg height="100" width="100"
        onMouseOver={() => dispatchOffset({ type: HOVER })}
        onMouseLeave={() => dispatchOffset({ type: UNHOVER })}>

            {/* arrow */}
            <line stroke="black" strokeWidth="8" strokeLinecap="round"
            x1="95" y1="5" 
            x2="70" y2="5"
            />
            <line stroke="black" strokeWidth="8" 
            strokeLinecap="round"
            x1="95" y1="5"
            x2="95" y2="30"
            />
            <line stroke="black" strokeWidth="8" strokeLinecap="round"
            x1="50" y1="50"
            x2="95" y2="5"
            />

            {/* box */}
            <line stroke="black" strokeWidth="15" 
            x1="0" y1="100"
            x2="0" y2="15"
            />
            <line stroke="black" strokeWidth="15" 
            x1="0" y1="100"
            x2="85" y2="100"
            />

            <line stroke="black" strokeWidth="8" 
            x1="0" y1="15"
            x2={(10 + offset.amt).toString()} y2="15"
            strokeLinecap="round"
            /> {/* x2: 15-55 increase */}

            <line stroke="black" strokeWidth="8" 
            x1="85" y1="100"
            x2="85" y2={(90 - offset.amt).toString()}
            strokeLinecap="round"
            /> {/* y2: 85-45 decrease */}

            {/* offset neesd to be between 5-45 */}

        </svg>
    </div>
</>
)
}

export default NewTab
