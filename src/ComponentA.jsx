import { useState } from 'react'
import ComponentB from './ComponentB.jsx'

function ComponentA(){

    const [user, setUser] = useState('d0meq')

    return(<div className="box">
        <h1>ComponentA</h1>
        <h3>{`Hello ${user}`}</h3>
        <ComponentB user={user}/>
    </div>)
}

export default ComponentA