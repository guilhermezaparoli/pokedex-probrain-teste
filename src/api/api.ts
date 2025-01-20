import axios from "axios";
import { PokemonAPIResponse } from "../@types/PokemonCard";
import { PokemonTypes } from "../@types/PokemonTypes";


export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization:import.meta.env.VITE_API_KEY, 
  },
});
console.log(import.meta.env.VITE_API_BASE_URL);

export async function fetchPokemonCards({
  page = 1,
  pageSize = 9,
  filterValue = '',
  typeName = '',
  cardName = '',
}: {
  page?: number;
  pageSize?: number;
  filterValue?: string;
  typeName?: PokemonTypes | string;
  cardName?: string;
}): Promise<PokemonAPIResponse> {
  try {
    const params: Record<string, string | number> = {
      page,
      pageSize,
      ...(filterValue && { orderBy: filterValue }),
      ...(typeName && { q: `types:${typeName}` }),
      ...(cardName && { q: `name:${cardName}` }),
    };

    const response = await api.get(`/cards`, { params });
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Erro ao buscar cartas:", error);
    throw new Error("Failed to fetch cards. Please try again later.");
  }
}

interface FetchTypesProps {
  data: PokemonTypes[]
}

export async function fetchTypes(): Promise<FetchTypesProps> {
  try {
    const response = await api.get(`/types`);
    const {data} = response
    return data
  } catch (error) {
    console.error("Erro ao buscar carta por ID:", error);
    throw error;
  }
}
