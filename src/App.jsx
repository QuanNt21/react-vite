import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {

    const [name, setName] = useState("")
    const [infor, setInfor] = useState("")

    const handleChange = (event) => {
        setName(event.target.value)
    }
    
    const handleClick = () => {
        setInfor(name)
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <input type="text" value={name} onChange={(event)=> handleChange(event)}/>
                <button onClick={() => handleClick()}>Submit</button>
                <p>Hello Vite + React with {infor}</p>
                <MyComponent/>
            </header>
        </div>
    );
}

export default App;
