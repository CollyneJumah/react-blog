const Clock = (props)=>{
    return (
        <div>
            <h1>Hello Nairobi</h1>
            <p>Its is {props.date.toLocaleTimeString() }</p>
        </div>
    )
}


export default Clock