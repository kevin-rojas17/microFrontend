// apuestasService.ts
import axios from 'axios';

export interface Apuesta {
  id: number;
  partido: string;
  cuota: number;
}

interface ApuestaResponse {
  mensaje: string;
}

const apiUrl = 'http://localhost:3000';

export const getApuestas = async (): Promise<Apuesta[]> => {
  try {
    const response = await axios.get<Apuesta[]>(`${apiUrl}/apuestas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener apuestas', error);
    throw error;
  }
};

export const hacerApuesta = async (id: number, cantidad: number): Promise<ApuestaResponse> => {
  try {
    const response = await axios.post<ApuestaResponse>(`${apiUrl}/apostar`, { id, cantidad });
    return response.data;
  } catch (error) {
    console.error('Error al hacer la apuesta', error);
    throw error;
  }
};

