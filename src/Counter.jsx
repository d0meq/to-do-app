import React, {useState} from 'react'

function Counter(){
    const [number, setNumber] = useState(0)

    const increaseNumber = () =>{
        setNumber(n => n + 1)
    }

    const restartNumber = () => {
        setNumber(n => n = 0)
    }

    const decreaseNumber = () =>{
        setNumber(n => n - 1)
    }

    return(
        <div className='counter'>
            <p className='number-display'>{number}</p>
            <button className='button' onClick={increaseNumber}>Increase</button>
            <button className='restart-button' onClick={restartNumber}>Reset</button>
            <button className='button' onClick={decreaseNumber}>Decrease</button>
        </div>
    )
}

export default Counter