import axios from "axios";
import { PokemonAPIResponse } from "../@types/PokemonCard";
import { PokemonTypes } from "../@types/PokemonTypes";



export const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: process.env.API_KEY, 
  },
});

export async function getAllPokemonCards(page: number, pageSize: number = 9): Promise<PokemonAPIResponse> {
  try {
    const response = await api.get(`/cards?pageSize=10`, {
      params: { page, pageSize },
    });

    const  {data}  = response;
    
  
    return data
  } catch (error) {
    console.error("Erro ao buscar cartas:", error);
    throw error;
  }
}

export async function fetchCardsByType(
  typeName: PokemonTypes,
  page: number,
  pageSize = 9
): Promise<PokemonAPIResponse> {
  try {
    const response = await api.get(`/cards`, {
      params: {
        page,
        pageSize,
        q: `types:${typeName}`,
      },
    });

    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching cards by type:", error);
    throw new Error("Failed to fetch cards. Please try again later.");
  }
}


export async function fetchCardByName(cardName: string): Promise<PokemonAPIResponse> {
  try {
    const response = await api.get(`/cards`, {
      params: { q: `name:${cardName}` },
    });

    const { data } = response.data;
    return data;
  } catch (error) {
    console.error("Erro ao buscar carta por nome:", error);
    throw error;
  }
}

export async function fetchCardById(cardId: string): Promise<PokemonAPIResponse> {
  try {
    const {data } = await api.get(`/cards/${cardId}`);
    return data;
  } catch (error) {
    console.error("Erro ao buscar carta por ID:", error);
    throw error;
  }
}

export async function fetchTypes(): Promise<PokemonAPIResponse> {
  try {
    const response = await api.get(`/types`);
    const {data} = response
    return data
  } catch (error) {
    console.error("Erro ao buscar carta por ID:", error);
    throw error;
  }
}


