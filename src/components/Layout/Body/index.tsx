import { useEffect, useState } from 'react';
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
  StyledPagination,
  StyledPokeballIcon,
  TextPokemonNotFound,
  TypeSearch,
  Types,
} from './styles';
import {
  getAllPokemonCards,
  fetchCardByName,
  fetchCardsByType,
  fetchTypes,
} from '../../../api/api';
import { CardType } from '../../CardType';
import IconSearch from '../../../assets/icon-search.svg';
import PokeballIcon from '../../../assets/pokeball-icon-colored.svg';
import { useDebounce } from '../../../utils/debounce';
import { PokemonCard } from '../../../@types/PokemonCard';

export function Body() {
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchByUser, setSearchByUser] = useState<string>('');
  const [typeSelected, setTypeSelected] = useState<string>('');
  const [allTypes, setAllTypes] = useState<PokemonCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const {data} = await fetchTypes()
        setAllTypes(data);
        getCardsByPage(currentPage);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchInitialData();
  }, []);

  async function onSelectType(type: string) {
    if (typeSelected !== type) {
      setTypeSelected(type);
      setLoading(true);

      try {
        await getCardsByType(type, 1);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      setTypeSelected('');
      getCardsByPage(currentPage);
    }
  }

  async function getCardsByType(type: string, currentPage: number) {
    try {
      const { data, pageSize, totalCount, page } = await fetchCardsByType(
        type,
        currentPage
      );
      const totalPages = Math.ceil(totalCount / pageSize);
      setPokemons(data);
      setTotalPages(totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getCardsByPage(currentPage: number) {
    setLoading(true);
    try {
      const { data, pageSize, totalCount, page } = await getAllPokemonCards(
        currentPage
      );
      const totalPages = Math.ceil(totalCount / pageSize);
      setPokemons(data);
      setTotalPages(totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(value: string) {
    setLoading(true);
    if (value) {
      try {
        const {data} = await fetchCardByName(value);
        setPokemons(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      getCardsByPage(currentPage);
    }
  }

  const debouncedSearch = useDebounce(handleSearch, 500);

  function onSearchByUser(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchByUser(value);
    debouncedSearch(value);
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
            {allTypes.map((type, index) => {
              return (
                <CardType
                  key={index}
                  value={type}
                  onClick={() => onSelectType(type)}
                  isSelected={type === typeSelected}
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
            {pokemons.length > 0 &&
              pokemons.map((pokemon) => (
                <CardPokemon key={pokemon.id} pokemonData={pokemon} />
              ))}
          </ContainerCards>
          <StyledPagination
            size="large"
            count={totalPages}
            page={currentPage}
            showFirstButton
            showLastButton
            onChange={(e, value) => {
              setLoading(true);

              if (typeSelected) {
                getCardsByType(typeSelected, value);
              } else {
                getCardsByPage(value);
              }
              scrollTo({ top: 500, behavior: 'smooth' });
            }}
          />
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
