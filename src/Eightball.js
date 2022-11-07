import React, { useState } from 'react'
import './EightBall.css'

const EightBall = ({ answers }) => {
    let random = answers[Math.floor(Math.random() * answers.length)]
    const [info, setInfo] = useState({ msg: 'Think of a question', color: 'black' })


    return (
        <>
            <div onClick={() => setInfo(random)} className='EightBall' style={{ backgroundColor: info.color }}>
                <p className='EightBall-text'>{info.msg}
                </p>
            </div>
        </>
    )
}

export default EightBall