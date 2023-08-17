import React, { useRef } from 'react'

const REF = () => {
    const count = useRef(0)
    const inputinput = useRef()
    const add = () => {
        alert(count.current = count.current + 1)
        inputinput.current.focus()
    }

    return (
        <div>
            <input type="text" ref={ inputinput } />
            <button onClick={ add }>Add</button>
            <h1>{ count.current }</h1>
        </div>
    )
}

export default REF
