import { useState } from "react";

const Home = () => {
    const [number, setNumber] = useState(6);

    const handleClick = () => {
        setNumber(Math.round(Math.random() * 45))
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <h1>{number}</h1>
            <button onClick={() => handleClick()}>Click me!</button>
        </div>
     );
}
 
export default Home;