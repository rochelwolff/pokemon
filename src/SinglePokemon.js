import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function SinglePokemon(){
    const [pokemonDetails, setPokemonDetails]= useState(null);
    const {id} = useParams();

   useEffect(() => {
    const fetchSingleDetails = async () => {
    try {
    const {data} = await axios.get (`https://pokeapi.co/api/v2/pokemon/${id}/`);
    setPokemonDetails(data); //setting the details on state

    
    }catch (err){
    console.error(err)
}
};
fetchSingleDetails();

   }, [id])

   //console.log ('Pokemon details', pokemonDetails); data is on state

    return (
        <div>
            <h2>Pokemon Details</h2>
            {pokemonDetails ? <div>
                <h3>{pokemonDetails.name}</h3>
                <img
                    src={pokemonDetails.sprites.front_default}
                    alt={pokemonDetails.name}
                />
                <p>Height: {pokemonDetails.height}</p>
                <p>Weight: {pokemonDetails.weight}</p>
                <p>Base Experience: {pokemonDetails.base_experience}</p>
                <p>Abilities: {pokemonDetails.abilities.map(ability => ability.ability.name).join (', ')}</p>
                </div>:
                <p>Loading... Pokemon Details

                </p> }
            
        </div>
    )
}

export default SinglePokemon;