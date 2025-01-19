import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Card,
  Dialog,
  IconTextContainer,
  MoreDetails,
  PokemonImage,
  PokemonName,
  StyledMainContainer,
  StyledPopup,
  Type,
} from './styles';
import BoltIcon from '../../assets/icon-bolt.svg';
import { CardType } from '../CardType';
import { PokemonCard } from '../../@types/PokemonCard';
import { ModalPokemon } from '../ModalCard';
import { useState } from 'react';

interface CardPokemonProps {
  pokemonData: PokemonCard;
  modal?: boolean
}

export function CardPokemon({ pokemonData, modal }: CardPokemonProps) {
  const pokemonTypes = pokemonData.types || ""
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseXSpring, [1, -1], ["25deg", "-25deg"])
  const rotateY = useTransform(mouseYSpring, [1, -1], ["-25deg", "25deg"])

  const [openModal, setOpenModal] = useState(false)
  function handleMouseMove(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <StyledMainContainer>
  
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: "1000px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <PokemonImage
            src={pokemonData?.images?.large}
            alt={pokemonData.name}
          />
        </motion.div>
      
      <Card color={pokemonTypes[0]}>
        <PokemonName title={pokemonData.name}>{pokemonData.name}</PokemonName>
        <Type>
          {pokemonTypes.length > 0 && pokemonTypes.map((item) => (
            <CardType
              key={item}
              value={item}
              isSelected
              style={{ cursor: 'initial' }}
            />
          ))}
        </Type>
        {/* <MoreDetails
          color={pokemonTypes[0]}
          onClick={() => navigate(`/${pokemonData.id}`)}
        >
          <IconTextContainer>
            <img src={BoltIcon} alt="" />
            <p>Mais detalhes</p>
          </IconTextContainer>
        </MoreDetails> */}


{modal || (
          <>
            <MoreDetails
              color={pokemonData?.types?.[0]}
              onClick={() => setOpenModal(true)}
            >
              <IconTextContainer>
                <img src={BoltIcon} alt="" />
                <p>More Details</p>
              </IconTextContainer>
            </MoreDetails>
            <StyledPopup
              open={openModal}
              onClose={() => setOpenModal(false)}
              modal
              nested
              lockScroll
            >
              <Dialog>
                <ModalPokemon
                  pokemonData={pokemonData}
                  close={() => {
                    setOpenModal(false);
                  }}
                />
              </Dialog>
            </StyledPopup>
          </>
        )}
      </Card>
    </StyledMainContainer>
  );
}
