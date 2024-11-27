"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Solicitud = {
  _id: string;
  estado: string;
  user_id?: { firstname: string; email: string; lastname: string; }; // user_id podría ser undefined
  academia_id?: { nombre_academia: string }; // academia_id podría ser undefined
};

export default function SolicitudesPage() {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Obtener las solicitudes al montar el componente
  useEffect(() => {
    const fetchSolicitudes = async () => {
      try {
        const response = await axios.get("/api/academias/solicitudes");
        setSolicitudes(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar las solicitudes");
        setLoading(false);
      }
    };

    fetchSolicitudes();
  }, []);

  // Manejar el cambio de estado de una solicitud
  const handleEstadoChange = async (id: string, nuevoEstado: string) => {
    try {
      await axios.patch("/api/academias/solicitudes", {
        solicitud_id: id,
        estado: nuevoEstado,
      });

      // Actualizar el estado local
      setSolicitudes((prevSolicitudes) =>
        prevSolicitudes.map((solicitud) =>
          solicitud._id === id ? { ...solicitud, estado: nuevoEstado } : solicitud
        )
      );
    } catch (err) {
      console.error("Error al actualizar la solicitud", err);
      setError("Error al actualizar la solicitud");
    }
  };

  // Renderizado del componente
  if (loading) return <p>Cargando solicitudes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center mb-5">Solicitudes</h1>
      {solicitudes.length === 0 ? (
        <p>Sin solicitudes.</p>
      ) : (
        <ul className="w-[335px] bg-[#d9d9d980] rounded-[20px] shadow">
          {solicitudes.map((solicitud) => (
            <li
              key={solicitud._id}
              className="flex h-[56px] justify-around items-center"
            >
              <div>
                <p>
                  {" "}
                  {solicitud.user_id
                    ? `${solicitud.user_id.firstname} ${solicitud.user_id.lastname}s`
                    : "Usuario no encontrado"}
                </p>
              </div>


              <div className="flex gap-5">
               
                <button
                  onClick={() => handleEstadoChange(solicitud._id, "rechazado")}
                  className="bg-red-500 text-white h-[24px] w-[24px] rounded-[50%] hover:bg-red-600 flex justify-center items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#e8eaed"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>

                <button
                  onClick={() => handleEstadoChange(solicitud._id, "aceptado")}
                  className="bg-green-500 h-[24px] w-[24px] text-white rounded-[50%] flex justify-center items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#e8eaed"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
