import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return (
        <div>
            <h1>This is about Page</h1>
            <User name="Tarun (function)" location="Kolkata"/>
            <hr/>
            <UserClass name="Tarun (class)" location="Kolkata"/>
        </div>
    );
}

export default About;