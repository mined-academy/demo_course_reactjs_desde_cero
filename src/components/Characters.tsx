const Characters = ({ characters }: any) => {
    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span>Volver a Home</span>
            <div className="container-characters">
                {characters.map((character: any, index: string) => (
                    <div className="character-container" key={index}>
                        <img src={character.image} alt={character.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;
