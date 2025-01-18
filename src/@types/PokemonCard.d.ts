export interface PokemonAPIResponse {
    data: PokemonCard[];
    page: number;
    pageSize: number;
    count: number;
    totalCount: number;
  }
  

  export interface PokemonCard {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    level?: string;
    hp: string;
    types: string[];
    evolvesFrom?: string;
    evolvesTo?: string[];
    abilities?: Ability[];
    attacks?: Attack[];
    weaknesses?: WeaknessResistance[];
    resistances?: WeaknessResistance[];
    retreatCost?: string[];
    convertedRetreatCost?: number;
    set?: CardSet;
    number: string;
    artist?: string;
    rarity?: string;
    flavorText?: string;
    nationalPokedexNumbers?: number[];
    legalities?: Legalities;
    images?: CardImages;
    tcgplayer?: TcgPlayerData;
    cardmarket?: CardMarketData;
  }
  
  export interface Ability {
    name: string;
    text: string;
    type: string;
  }
  
  export interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }
  
  export interface WeaknessResistance {
    type: string;
    value: string;
  }
  
  export interface CardSet {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: Legalities;
    ptcgoCode?: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  }
  
  export interface Legalities {
    unlimited?: string;
    expanded?: string;
  }
  

  export interface CardImages {
    small: string;
    large: string;
  }
  

  export interface TcgPlayerData {
    url: string;
    updatedAt: string;
    prices: {
      [variant: string]: PriceData; 
    };
  }
  

  export interface CardMarketData {
    url: string;
    updatedAt: string;
    prices: {
      averageSellPrice?: number;
      lowPrice?: number;
      trendPrice?: number;
      germanProLow?: number;
      suggestedPrice?: number;
      reverseHoloSell?: number;
      reverseHoloLow?: number;
      reverseHoloTrend?: number;
      lowPriceExPlus?: number;
      avg1?: number;
      avg7?: number;
      avg30?: number;
      reverseHoloAvg1?: number;
      reverseHoloAvg7?: number;
      reverseHoloAvg30?: number;
      [key: string]: number | undefined;
    };
  }
  
  export interface PriceData {
    low?: number;
    mid?: number;
    high?: number;
    market?: number;
    directLow?: number | null;
  }
  