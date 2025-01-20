import { CSSProperties, FC } from 'react';
import { StyledContainer } from './styles';

import Darkness from "../../components/icons/Darkness"
import Dragon from "../../components/icons/Dragon"
import Electric from "../../components/icons/Electric"
import Fairy from "../../components/icons/Fairy"
import Fire from "../../components/icons/Fire"
import Colorless from "../../components/icons/Colorless"
import Psychic from "../../components/icons/Psychic"
import Metal from "../../components/icons/Metal"
import Water from "../../components/icons/Water"
import Fighting from "../../components/icons/Fighting"
import Grass from "../../components/icons/Grass"

export interface CardTypeProps {
  value: any ;
  isSelected: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export function CardType({
  value,
  onClick,
  isSelected = false,
  style,
}: CardTypeProps) {
  let TypeSvgComponent: FC<React.SVGProps<SVGSVGElement>> | undefined;

  switch (value) {
    case 'Darkness':
      TypeSvgComponent = Darkness;
      break;
    case 'Dragon':
      TypeSvgComponent = Dragon;
      break;
    case 'Lightning':
      TypeSvgComponent = Electric;
      break;
    case 'Fairy':
      TypeSvgComponent = Fairy;
      break;
    case 'Fighting':
      TypeSvgComponent = Fighting;
      break;
    case 'Fire':
      TypeSvgComponent = Fire;
      break;
    case 'Grass':
      TypeSvgComponent = Grass;
      break;

    case 'Colorless':
      TypeSvgComponent = Colorless;
      break;
    case 'Psychic':
      TypeSvgComponent = Psychic;
      break;
    case 'Metal':
      TypeSvgComponent = Metal;
      break;
    case 'Water':
      TypeSvgComponent = Water;
      break;
  }

  return (
    <StyledContainer
      statusColor={value}
      onClick={onClick}
      style={style}
      isSelected={isSelected}
    >
      {TypeSvgComponent && <TypeSvgComponent />}
{/* <Darkness/> */}
      <p>{value}</p>
    </StyledContainer>
  );
}