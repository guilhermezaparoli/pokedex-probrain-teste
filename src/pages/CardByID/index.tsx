import { useParams } from 'react-router-dom';
import {
  ContainerFeatures,
  ContainerHeader,
  ContainerImage,
  Content,
  Features,
  FeaturesAttacks,
  PokemonImage,
  PokemonName,
  StyledGlobalContainer,
  Type,
} from './styles';
import { fetchCardById } from '../../api/api';
import { useEffect, useState } from 'react';
import { PokemonCard } from '../../@types/PokemonCard';
import { CardType } from '../../components/CardType';

export function CardByID() {
  const { id } = useParams();
  console.log(id);
  const [cardPokemon, setCardPokemon] = useState<PokemonCard>({});

  useEffect(() => {
    async function fetchInitialData() {
      if (id) {
        const { data } = await fetchCardById(id);
        setCardPokemon(data);
      }
    }
    fetchInitialData();
  }, []);

  console.log(cardPokemon.types);
  return (
    <StyledGlobalContainer color={cardPokemon?.types?.[0]}>
      <ContainerHeader>
        <PokemonName>{cardPokemon.name}</PokemonName>
      </ContainerHeader>
      <Content>
        <ContainerImage>
          <PokemonImage src={cardPokemon.images?.large} />
        </ContainerImage>
        <ContainerFeatures>
          <p>Basic Stats:</p>
          <div>
            <Features>
              <p>Type:</p>
              {cardPokemon.types?.length > 0 &&
                cardPokemon.types.map((item) => (
                  <CardType
                    key={item}
                    value={item}
                    isSelected
                    style={{ cursor: 'initial' }}
                  />
                ))}
            </Features>
            <Features>
              <p>HP:</p>
              <p>{cardPokemon.hp}</p>
            </Features>
          </div>
        </ContainerFeatures>

        <ContainerFeatures>
          <p>Attacks:</p>
            {cardPokemon.attacks?.map((attack, index) => (
          
                <FeaturesAttacks>
                <p>{index + 1}º</p>
              <p>Name: {attack.name}</p>
              <p>Cost: {attack.name}</p>
              <p>Damage: {attack.damage}</p>
              {attack.text && <p>Description: {attack.text}</p>}
              
              
            </FeaturesAttacks>

         
            ))}
           
        </ContainerFeatures>
        <ContainerFeatures>
          <p>Weaknesses:</p>
            {cardPokemon.weaknesses?.map((weak) => (
          
            <FeaturesAttacks>
              <p>Type: {weak.type}</p>
              <p>Value: {weak.value}</p>
            
              
              
            </FeaturesAttacks>

         
            ))}
           
        </ContainerFeatures>
      </Content>
    </StyledGlobalContainer>
  );
}
