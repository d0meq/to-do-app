import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0)
    const [isEmployed, setEmployment] = useState(false)

    const updateName = () => {
        setName("Dominik")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const changeEmployment = () => {
        setEmployment(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>
            
            <p>Age: {age}</p>
            <button onClick={incrementAge} >Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes": "No"}</p>
            <button onClick={changeEmployment} >Toggle status</button>
        </div>
    )

}

export default MyComponent
