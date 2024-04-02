import image from './assets/rick-morty.png';
// import { useState } from 'react';
import './App.css';

function App() {
    const callAPI = () => {
        console.log('Clicking');
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h1 className="title">Rick & Morty </h1>
                <img src={image} alt='Rick \& Morty' className='img-home'/>
                <button onClick={callAPI} className='btn-search'>
                    Buscar Personajes
                </button>
            </header>
        </div>
    );
}

export default App;
