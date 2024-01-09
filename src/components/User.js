import { useState } from "react";
const User = (props)=>{
    const [count,setCount] = useState(0);
    const { name, location} = props;
    return (
        <div className="user-card">
            <h1>Count : {count} </h1>
            <button onClick={ ()=>{
                setCount(count+1)
            }}>Count Increase</button>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Contact : tarun@gmail.com</h3>
        </div>
    )
}

export default User;