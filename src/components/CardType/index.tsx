import { CSSProperties, FC } from "react";
import {StyledContainer } from "./styles";
import {ReactComponent as IconTypeDark} from "../../assets/pokemonTypes/dark.svg"
import {ReactComponent as IconTypeDragon} from "../../assets/pokemonTypes/dragon.svg"
import {ReactComponent as IconTypeElectric} from "../../assets/pokemonTypes/electric.svg"
import {ReactComponent as IconTypeFairy} from "../../assets/pokemonTypes/fairy.svg"
import {ReactComponent as IconTypeFighting} from "../../assets/pokemonTypes/fighting.svg"
import {ReactComponent as IconTypeFire} from "../../assets/pokemonTypes/fire.svg"
import {ReactComponent as IconTypeGrass} from "../../assets/pokemonTypes/grass.svg"
import {ReactComponent as IconTypeNormal} from "../../assets/pokemonTypes/normal.svg"
import {ReactComponent as IconTypePsychic} from "../../assets/pokemonTypes/psychic.svg"
import {ReactComponent as IconTypeSteel} from "../../assets/pokemonTypes/steel.svg"
import {ReactComponent as IconTypeWater} from "../../assets/pokemonTypes/water.svg"
export interface CardTypeProps {
  value: "Darkness"
  | "Dragon"
  | "Lightning"
  | "Fairy"
  | "Fighting"
  | "Fire"
  | "Grass"
  | "Colorless"
  | "Psychic"
  | "Metal"
  | "Water";
  isSelected: boolean
  onClick?: () => void
  style?: CSSProperties
}


export function CardType({ value, onClick, isSelected, style}: CardTypeProps) {
  let TypeSvgComponent: FC<React.SVGProps<SVGSVGElement>> | undefined;
  
  switch (value) {
  case "Darkness":
    TypeSvgComponent = IconTypeDark;
  break
  case "Dragon":
    TypeSvgComponent = IconTypeDragon;
  break
  case "Lightning":
    TypeSvgComponent = IconTypeElectric;
  break
  case "Fairy":
    TypeSvgComponent = IconTypeFairy;
  break
  case "Fighting":
    TypeSvgComponent = IconTypeFighting;
  break
  case "Fire":
    TypeSvgComponent = IconTypeFire;
  break
  case "Grass":
    TypeSvgComponent = IconTypeGrass;
  break

  case "Colorless":
    TypeSvgComponent = IconTypeNormal;
  break
  case "Psychic":
    TypeSvgComponent = IconTypePsychic;
  break
  case "Metal":
    TypeSvgComponent = IconTypeSteel;
  break
  case "Water":
    TypeSvgComponent = IconTypeWater;
  break
}

  return (
    <StyledContainer statusColor={value} onClick={onClick}  style={style} isSelected={isSelected} >
      {TypeSvgComponent && <TypeSvgComponent/>}
      <p>{value}</p>
    </StyledContainer>
  );
}
