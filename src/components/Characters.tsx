type Character = {
    image: string;
    name: string;
    status: 'Alive' | 'Dead';
    episode: Array<string>;
    species: string;
};

const Characters = ({ characters, setCharacters }: {characters: Character[], setCharacters: any}) => {
    const resetCharacters = () => {
        setCharacters(null);
    };

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Volver a Home</span>
            <div className="container-characters">
                {characters.map((character: Character, index: number) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="alive"/>Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" />Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios:</span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie:</span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver a Home</span>
        </div>
    );
};

export default Characters;
