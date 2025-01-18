import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import GifPikachuCrying from '../../../assets/gif/pikachu-crying.gif';

import { CardPokemon } from '../../CardPokemon';
import {
  ButtonSearch,
  ContainerCards,
  ContainerDivider,
  ContainerGif,
  DividerLeft,
  DividerRight,
  InputSearch,
  InputSearchContainer,
  PokemonNotFound,
  SearchContainer,
  StyledContainerBody,
  StyledLoader,
  StyledPokeballIcon,
  TextPokemonNotFound,
  TypeSearch,
  Types,
} from './styles';
import {
  getAllPokemonCards,
  fetchCardById,
  fetchCardByName,
  fetchCardsByType,
  fetchTypes,
} from '../../../api/api';
import { CardType } from '../../CardType';
import IconSearch from '../../../assets/icon-search.svg';
import PokeballIcon from '../../../assets/pokeball-icon-colored.svg';
import { STATUS_COLORS } from '../../CardType/styles';
import { PokemonCard } from '../../../@types/PokemonCard';
export interface PokemonType {
  type: {
    name:
      | 'bug'
      | 'dark'
      | 'electric'
      | 'fairy'
      | 'fighting'
      | 'dragon'
      | 'fire'
      | 'flying'
      | 'ghost'
      | 'grass'
      | 'ground'
      | 'ice'
      | 'normal'
      | 'poison'
      | 'psychic'
      | 'rock'
      | 'steel'
      | 'water';
  };
}

export function Body() {
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchByUser, setSearchByUser] = useState<string>('');
  const [isSelected, setIsSelected] = useState<string>('');

  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setTypes(await fetchTypes());
        setPokemons(await getAllPokemonCards());
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchInitialData();
  }, []);

  async function onSelectType(type: string) {
    if (isSelected !== type) {
      setIsSelected(type);
      setLoading(true);

      try {
        setPokemons(await fetchCardsByType(type, 1, 9));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      setIsSelected('');

      try {
        setPokemons(await getAllPokemonCards(1, 9));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }

  async function onSearchByUser(e: ChangeEvent) {
    const value = e.target.value
    setSearchByUser(value)
    setLoading(true)
   if(value){
    try {
      console.log(await fetchCardByName(value), "await fetchCardByName(value)");
      setPokemons(await fetchCardByName(value));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
   }
  }

  return (
    <StyledContainerBody>
      <SearchContainer>
        <InputSearchContainer>
          <form action="">
            <InputSearch
              type="text"
              placeholder="Busque seu pokemon"
              onChange={(e) => onSearchByUser(e)}
              value={searchByUser}
            />
            <ButtonSearch type="submit">
              <img src={IconSearch} alt="icone de lupa" />
            </ButtonSearch>
          </form>
        </InputSearchContainer>
        <TypeSearch>
          <p>Filtro por tipo</p>
          <Types>
            {types.map((type, index) => {
              return (
                <CardType
                  key={index}
                  value={type as keyof typeof STATUS_COLORS}
                  onClick={() => onSelectType(type)}
                  isSelected={type === isSelected}
                />
              );
            })}
          </Types>
        </TypeSearch>
      </SearchContainer>

      <ContainerDivider>
        <DividerLeft />
        <StyledPokeballIcon src={PokeballIcon} alt="" />
        <DividerRight />
      </ContainerDivider>
      {loading ? (
        <StyledLoader style={{ display: 'flex', justifyContent: 'center' }}>
          <span className="loader" />{' '}
        </StyledLoader>
      ) : pokemons.length > 0 ? (
        <>
          <ContainerCards>
            {pokemons.length > 0  && pokemons.map((pokemon) => (
              <CardPokemon key={pokemon.id} pokemonData={pokemon} />
            ))}
          </ContainerCards>
        </>
      ) : (
        <PokemonNotFound>
          <ContainerGif>
            <img src={GifPikachuCrying} alt="" />
          </ContainerGif>
          <TextPokemonNotFound>
            Desculpe, pokemon não encontrado!
          </TextPokemonNotFound>
        </PokemonNotFound>
      )}
    </StyledContainerBody>
  );
}
