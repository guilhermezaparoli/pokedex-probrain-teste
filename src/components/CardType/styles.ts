import styled from "@emotion/styled";


export const STATUS_COLORS = {
  Darkness: "type-dark",
  Dragon: "type-dragon",
  Lightning: "type-electric",
  Fairy: "type-fairy",
  Fighting: "type-fighting",
  Fire: "type-fire",
  Grass: "type-grass",
  Colorless: "type-normal",
  Psychic: "type-psychic",
  Metal: "type-steel",
  Water: "type-water",
} as const;

export interface StatusProps {
  statusColor:
    | "Darkness"
    | "Dragon"
    | "Lightning"
    | "Fairy"
    | "Fighting"
    | "Fire"
    | "grass"
    | "Colorless"
    | "Psychic"
    | "Metal"
    | "water";
  isSelected: boolean;
}


export const StyledContainer = styled.button<StatusProps>`
background-color: ${props => props.isSelected ? props.theme[STATUS_COLORS[props.statusColor]]  : `#060F39`};


display: flex;
align-items: center;
gap: 8px;

padding: 4px 8px;
border-radius: 8px;
border: 1px solid transparent;
transition: 0.3s;

p {
  color: ${props => props.theme.white} ;
  font-size: 1rem;
  line-height: 1.5;

  text-transform: capitalize;
}

svg path {
transition: 0.3s;
  fill: ${props => props.isSelected ? props.theme.white : props.theme[STATUS_COLORS[props.statusColor]]};
}

&:hover {
  border: 1px solid  ${props => props.theme[STATUS_COLORS[props.statusColor]]}

}

`