import { useEffect, useState } from 'react';
import GifPikachuCrying from '../../../assets/gif/pikachu-crying.gif';
import { CardPokemon } from '../../CardPokemon';
import {
  ContainerCards,
  ContainerDivider,
  ContainerGif,
  ContainerOrderBy,
  DividerLeft,
  DividerRight,
  InputSearch,
  InputSearchContainer,
  PokemonNotFound,
  SearchContainer,
  SelectFilter,
  StyledContainerBody,
  StyledLoader,
  StyledPagination,
  StyledPokeballIcon,
  TextPokemonNotFound,
  TypeSearch,
  Types,
} from './styles';
import {
  fetchTypes,
  fetchPokemonCards,
} from '../../../api/api';
import { CardType } from '../../CardType';
import PokeballIcon from '../../../assets/pokeball-icon-colored.svg';
import { useDebounce } from '../../../utils/debounce';
import { PokemonCard } from '../../../@types/PokemonCard';
import { PokemonTypes } from '../../../@types/PokemonTypes';
import { MenuItem, SelectChangeEvent } from '@mui/material';

export function Body() {
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchByUser, setSearchByUser] = useState<string>('');
  const [typeSelected, setTypeSelected] = useState<PokemonTypes| string>('');
  const [allTypes, setAllTypes] = useState<PokemonTypes[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValue, setFilterValue] = useState('');

  const filterOptions = [
    { value: 'number', label: 'Number (Ascending)' },
    { value: '-number', label: 'Number (Descending)' },
    { value: 'name', label: 'Name (A-Z)' },
    { value: '-name', label: 'Name (Z-A)' },
    { value: 'releaseDate', label: 'Release Date (Most Recent)' },
    { value: '-releaseDate', label: 'Release Date (Oldest)' },
  ];

  async function fetchTypesData() {
    try {
      const { data } = await fetchTypes();
      setAllTypes(data);
    } catch (error) {
      console.error('Error fetching types:', error);
    }
  }

  async function fetchCardsData({
    page = 1,
    filterValue = '',
    typeName = '' ,
    cardName = '',
  }: {
    page?: number;
    filterValue?: string;
    typeName?: PokemonTypes | string;
    cardName?: string;
  }) {
    setLoading(true);
    try {
      const { data, pageSize, totalCount, page: fetchedPage } = await fetchPokemonCards({
        page,
        filterValue,
        typeName,
        cardName,
      });
      setPokemons(data);
      setTotalPages(Math.ceil(totalCount / pageSize));
      setCurrentPage(fetchedPage);
    } catch (error) {
      console.error('Error fetching cards:', error);
    } finally {
      setLoading(false);
    }
  }

  async function onSelectType(type: PokemonTypes) {
    if (typeSelected === type) {
      setTypeSelected('');
      await fetchCardsData({ page: 1, filterValue });
      return;
    }

    setTypeSelected(type);
    setSearchByUser("")
    await fetchCardsData({ page: 1, typeName: type, filterValue });
  }

  const debouncedSearch = useDebounce(async (value: string) => {
    if (value) {
      await fetchCardsData({ cardName: value });
    } else {
      await fetchCardsData({ page: currentPage, filterValue });
    }
  }, 500);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if(value) {
      setTypeSelected('')
    }
    setSearchByUser(value);
    debouncedSearch(value);
  }

  function handleFilterChange(e: SelectChangeEvent<unknown>)  {
    const value = e.target.value as string;
    setFilterValue(value);
    fetchCardsData({ page: 1, filterValue: value, typeName: typeSelected });
  }

  useEffect(() => {
    async function initializeData() {
      try {
        await fetchTypesData();
        await fetchCardsData({ page: 1 });
      } catch (error) {
        console.error('Initialization error:', error);
      }
    }
    initializeData();
  }, []);

  return (
    <StyledContainerBody>
      <SearchContainer>
        <InputSearchContainer>
          <InputSearch
            type="text"
            placeholder="Search your pokemon"
            onChange={handleSearchChange}
            value={searchByUser}
            aria-label="Search Pokémon"
          />
          <ContainerOrderBy>

         <p>Order by:

         </p>
  
         
            <SelectFilter
              value={filterValue}
              onChange={handleFilterChange}
              displayEmpty
              sx={{ padding: '0 8px'}}
            >
              <MenuItem  disabled value="">
                <em>Choose a filter</em>
              </MenuItem>
              {filterOptions.map(({ value, label }) => (
                <MenuItem  key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </SelectFilter>
            </ContainerOrderBy>
         
        </InputSearchContainer>
        <TypeSearch>
          <p>
          Filter by type</p>
          <Types>
            {allTypes?.length > 0 ? (
              allTypes.map((type, index) => (
                <CardType
                  key={index}
                  value={type}
                  onClick={() => onSelectType(type)}
                  isSelected={type === typeSelected}
                />
              ))
            ) : (
              <p>Loading types...</p>
            )}
          </Types>
        </TypeSearch>
      </SearchContainer>

      <ContainerDivider>
        <DividerLeft />
        <StyledPokeballIcon src={PokeballIcon} alt="Pokeball icon" />
        <DividerRight />
      </ContainerDivider>

      {loading ? (
        <StyledLoader>
          <span className="loader" />
        </StyledLoader>
      ) : pokemons?.length > 0 ? (
        <>
          <ContainerCards>
            {pokemons.map((pokemon) => (
              <CardPokemon key={pokemon.id} pokemonData={pokemon} />
            ))}
          </ContainerCards>
          <StyledPagination
            count={totalPages}
            page={currentPage}
            boundaryCount={0}
            showFirstButton
            showLastButton
            onChange={(e, value) => {
              fetchCardsData({ page: value, filterValue, typeName: typeSelected });
              scrollTo({ top: 500, behavior: 'smooth' });
              console.log(e);
            }}
          />
        </>
      ) : (
        <PokemonNotFound>
          <ContainerGif>
            <img src={GifPikachuCrying} alt="Crying Pikachu" loading="lazy" />
          </ContainerGif>
          <TextPokemonNotFound>
            Desculpe, pokemon não encontrado!
          </TextPokemonNotFound>
        </PokemonNotFound>
      )}
    </StyledContainerBody>
  );
}
