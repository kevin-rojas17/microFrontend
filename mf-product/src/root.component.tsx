import React, { useState } from 'react';
import { hacerApuesta } from './apuestasService'; // Ajusta la ruta según la ubicación del archivo

const Root: React.FC = () => {
  const [id, setId] = useState<number | ''>('');
  const [cantidad, setCantidad] = useState<number | ''>('');
  const [mensaje, setMensaje] = useState<string>('');

  const handleApostar = async () => {
    if (id === '' || cantidad === '') {
      setMensaje('Por favor, complete todos los campos.');
      return;
    }

    try {
      const response = await hacerApuesta(Number(id), Number(cantidad));
      setMensaje(response.mensaje);
    } catch (error) {
      setMensaje('Error al realizar la apuesta.');
    }
  };

  return (
    <div>
      <h1>Realizar Apuesta</h1>
      <input
        type="number"
        placeholder="ID de apuesta"
        value={id === '' ? '' : id}
        onChange={(e) => setId(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad === '' ? '' : cantidad}
        onChange={(e) => setCantidad(Number(e.target.value))}
      />
      <button onClick={handleApostar}>Apostar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Root;

