import PokeCard from "./PokeCard"
import './PokeList.css'

function PokeList({ pokemons }) {
    const showHabilities = (abilities) => {
        const abilitiesArray = abilities.map(ability => ability.ability.name).join(' , ')
        return abilitiesArray
    }
    return (
        <div className="PokeList" >
            {pokemons.map((pokemon) => {
                return (
                    <PokeCard
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        abilities={showHabilities(pokemon.abilities)}
                        types={pokemon.types}
                        id={pokemon.id}
                        favorite={pokemon.favorite}
                        key={pokemon.name} />);
            })}
        </div>
    )
};

PokeList.defaultProps = {
    pokemons: Array(10).fill(''), // Crea arreglo de 10 posiciones con ''
}

export default PokeList