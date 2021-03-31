import React from "react";
//import logo from './logo.svg';
import "./App.css";
import {Form} from "./Components/Form";
import {Title} from "./Components/Title";

function App() {
    return (
        <div>
            <Title>
                Esquenta React TypeScript
                <p>
                <span>Guilherme V. Favretto
                </span>
                </p>
            </Title>
            <Form/>
        </div>
    );
}

export default App;
