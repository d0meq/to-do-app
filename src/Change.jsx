import React, {useState} from 'react'

function Change() {
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value)
    }

    function handleCommentChange(e){
        setComment(e.target.value)
    }

    function handlePaymentChange(e){
        setPayment(e.target.value)
    }

    function handleShippingChange(e){
        setShipping(e.target.value)
    }

    return(
        <div>
            <input value={name} onChange={(e) => handleNameChange(e)}/>
            <p>Name: {name}</p>
            
            <input type='number' value={quantity} onChange={(e) => handleQuantityChange(e)}/>
            <p>Quantity: {quantity}</p>
             
            <textarea value={comment} onChange={handleCommentChange} placeholder='Enetr delivery instructions'></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Gift card">Gift card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <br/>
            <label >
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default Change