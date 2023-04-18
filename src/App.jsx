import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {

    const [name, setName] = useState("Quan Nt")
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <input type="text" value={name}/>
                <p>Hello Vite + React! My name is {name}</p>
                <MyComponent/>
            </header>
        </div>
    );
}

export default App;
