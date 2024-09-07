import propTypes from 'prop-types'

function List(props){

    //fruits.sort((a, b) => a.name.localeCompare(b.name))
    // fruits.sort((a, b) => b.name.localeCompare(a.name))
    // fruits.sort((a,b) => a.calories - b.calories)
    // fruits.sort((a,b) => b.calories - a.calories)

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

    // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b></li>)
    // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b></li>)

    const category = props.category
    const itemList = props.items


    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>   
        </>
    )
}
List.defaultProps = {
    category: "Category",
    items: []

}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number}, {name: propTypes.string}, {calories: propTypes.number}))
}
export default List