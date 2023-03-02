import { Grid } from '@mui/material';
import React from 'react';
import { Pokemon } from '../models';
import { PokemonCard } from './PokemonCard';

interface PokemonsProps {
  pokemons: Pokemon[];
  onClickPokemon: (pokemon: Pokemon) => void;
  selected?: Pokemon;
}

export const Pokemons: React.FC<PokemonsProps> = ({ pokemons, onClickPokemon, selected }) => {
  return (
    <Grid sx={{ maxWidth: '70%', height: 'calc(100vh - 310px)', overflow: 'auto' }} container spacing={2}>
      {pokemons.map((pokemon) => (
        <Grid item key={pokemon.id} xl={3}>
          <PokemonCard
            pokemon={pokemon}
            selected={pokemon.id === selected?.id}
            onClick={() => onClickPokemon(pokemon)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
