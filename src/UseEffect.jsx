import React, {useState, useEffect} from "react";

function UseEffect(){
    // const [count, setCount] = useState(0)
    // const [color, setColor] = useState('green')

    // useEffect(() => {
    //     document.title = `Count ${count} ${color}`
    // }, [count, color])

    // function addCount(){
    //     setCount(c => c + 1)
    // }

    // function substractCount(){
    //     setCount(c => c - 1)
    // }

    // function changeColor(){
    //     setColor(c => c === 'green' ? 'red' : 'green')
    // }

    // return(<>
    //     <p style={{color: color}}>Count: {count}</p>
    //     <button onClick={addCount}>Add</button>
    //     <button onClick={substractCount}>Subtract</button>
    //     <button onClick={changeColor}>Change Color</button>
    // </>)

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }
    , [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(<>
        <p>Window width: {width}</p>
        <p>Window height: {height}</p>
    </>)
}

export default UseEffect