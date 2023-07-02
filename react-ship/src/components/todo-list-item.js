function TodoListItem(props) {
    const item = props.item

    return (
        
            <div className="item" key={item.id}>
            <h3 className="text-xl font-bold m-3 mb-0">Name</h3> <p className="m-3 mt-0">{item.name}</p>
            <h3 className="text-xl font-bold m-3 mb-0">Pickup</h3><p className="m-3 mt-0"> {item.from}</p>
            <h3 className="text-xl font-bold m-3 mb-0">Dropoff</h3><p className="m-3 mt-0"> {item.to}</p>
            <h3 className="text-xl font-bold m-3 mb-0">Notes</h3><p className="m-3 mt-0"> {item.notes}</p>
            </div>
        
    )
}

export default TodoListItem