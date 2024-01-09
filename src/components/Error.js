import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!</h1>
            <h2>Somwthing went worng</h2>
        </div>
    )
}

export default Error;