import React, {useState} from 'react'

function ObjectUpdate(){
    
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"})
    
    function handleYearChange(e){
        setCar({...car, year: e.target.value})
    }

    function handleMakeChange(e){
        setCar({...car, make: e.target.value})
    }

    function handleModelChange(e){
        setCar({...car, model: e.target.value})
    }

    return(<div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={(e) => handleYearChange(e)}/><br/>
            <input type="text" value={car.make} onChange={(e) => handleMakeChange(e)}/><br/>
            <input type="text" value={car.model} onChange={(e) => handleModelChange(e)}/><br/>
    </div>)
}

export default ObjectUpdate