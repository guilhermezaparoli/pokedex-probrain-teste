import { CardPokemon } from '../CardPokemon';
import {
  ContainerAtributes,
  ContainerDivider,
  ContainerModalPokemon,
  ContainerPokemonStatus,
  Divider,
  StatusAttack,
  StatusLinha,
  TextStatus,
  TitleStatus,
} from './styles';

import { PokemonCard } from '../../@types/PokemonCard';
import DividerPokeballIcon from '../../components/icons/DividerPokeball';
interface ModalPokemonProps {
  pokemonData: PokemonCard;
  close: () => void;
}

export function ModalPokemon({ pokemonData, close }: ModalPokemonProps) {
  return (
    <>
      <ContainerModalPokemon>
        <button
          onClick={() => {
            close();
          }}
        >
          X
        </button>
        <CardPokemon pokemonData={pokemonData} modal />
        <ContainerDivider>
          <Divider />
          <DividerPokeballIcon />
          <Divider />
        </ContainerDivider>
        <ContainerPokemonStatus>
          <TextStatus>Status</TextStatus>

          <ContainerAtributes>
            <StatusLinha>
              <TitleStatus>HP:</TitleStatus>
              <p>{pokemonData.hp}</p>
            </StatusLinha>

            <StatusAttack>
              <TitleStatus>Attacks:</TitleStatus>
              <div>
                {pokemonData.attacks?.map((attack, index) => (
                  <>
                    <StatusLinha>
                      <p>{index + 1}º</p>
                      <p>{attack.name}</p>
                    </StatusLinha>
                    {attack.damage && <p>Damage: {attack.damage}</p>}
                  </>
                ))}
              </div>
            </StatusAttack>
          </ContainerAtributes>
        </ContainerPokemonStatus>
      </ContainerModalPokemon>
    </>
  );
}
