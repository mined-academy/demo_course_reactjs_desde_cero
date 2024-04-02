import image from "./assets/rick-morty.png";
import Characters from "./components/Characters";
import { useState } from "react";
import "./App.css";

function App() {
    const [characters, setCharacters] = useState(null);
    const callAPI = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const json = await res.json();
        setCharacters(json.results);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">Rick & Morty </h1>
                {characters ? (
                    <Characters characters={characters} setCharacters={setCharacters}/>
                ) : (
                    <>
                        <img
                            src={image}
                            alt="Rick \& Morty"
                            className="img-home"
                        />
                        <button onClick={callAPI} className="btn-search">
                            Buscar Personajes
                        </button>
                    </>
                )}
            </header>
        </div>
    );
}

export default App;
