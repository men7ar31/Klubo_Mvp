"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import "./style.css";

type Academia = {
  _id: string;
  nombre_academia: string;
  descripcion: string;
  tipo_disciplina: string;
  telefono: string;
};

export default function AcademiasPage() {
  const [academias, setAcademias] = useState<Academia[]>([]);

  useEffect(() => {
    const fetchAcademias = async () => {
      try {
        const response = await axios.get("/api/academias");
        setAcademias(response.data);
      } catch (error) {
        console.error("Error fetching academias:", error);
      }
    };

    fetchAcademias();
  }, []);

  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="topBar h-[70px] w-[390px] flex justify-around items-center">
        <div className="h-[60px]">
          <img
            className="rounded-[50%] h-[60px]"
            src="https://i.pinimg.com/originals/11/f7/ce/11f7ce1d984a1355d7ad6d3b8d722003.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-slate-500 text-[12px]">Ubicación</p>
          <p className="flex font-normal items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 -960 960 960"
              width="16px"
              fill="#ff3d00"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            San Miguel de Tucumán
          </p>
        </div>
        <div className="border rounded-[50%] shadow h-[35px] w-[35px] flex  items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25px"
            viewBox="0 0 24 24"
            width="25px"
            fill="#999"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </div>
      </div>

      <div className="w-[390px] flex justify-center">
        <form action="" className="w-[360px]">
          <input
            type="text"
            className="bg-[#f4f4f4] border-2 w-[360px] h-[50px] rounded-full"
            placeholder="Buscar academia"
          />
        </form>
      </div>

      <div className="w-[390px] flex justify-center gap-7">
        <div className="flex flex-col justify-center items-center">
          <button className="border-2 rounded-full w-[45px] h-[45px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#999"
            >
              <path d="M520-40v-240l-84-80-40 176-276-56 16-80 192 40 64-324-72 28v136h-80v-188l158-68q35-15 51.5-19.5T480-720q21 0 39 11t29 29l40 64q26 42 70.5 69T760-520v80q-66 0-123.5-27.5T540-540l-24 120 84 80v300h-80Zm20-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z" />
            </svg>
          </button>
          <p className="text-[11px] text-slate-500">Running</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <button className="border-2 rounded-full w-[45px] h-[45px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#999"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
            </svg>
          </button>
          <p className="text-[11px] text-slate-500">Ciclismo</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <button className="border-2 rounded-full w-[45px] h-[45px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#999"
            >
              <rect fill="none" height="24" width="24" />
              <path d="M13.5,5.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S12.4,5.5,13.5,5.5z M17.5,10.78c-1.23-0.37-2.22-1.17-2.8-2.18l-1-1.6 c-0.41-0.65-1.11-1-1.84-1c-0.78,0-1.59,0.5-1.78,1.44S7,23,7,23h2.1l1.8-8l2.1,2v6h2v-7.5l-2.1-2l0.6-3c1,1.15,2.41,2.01,4,2.34V23 H19V9h-1.5L17.5,10.78z M7.43,13.13l-2.12-0.41c-0.54-0.11-0.9-0.63-0.79-1.17l0.76-3.93c0.21-1.08,1.26-1.79,2.34-1.58l1.16,0.23 L7.43,13.13z" />
            </svg>
          </button>
          <p className="text-[11px] text-slate-500">Trekking</p>
        </div>
      </div>
      <h1 className="text-lg font-bold mb-2">Academias Recomendadas</h1>
      <div className="w-[390px]">
        
        <div className="scroll-container">
          {academias.map((academia) => (
            <div key={academia._id} className="academia-card">
              <Link href={`/academias/${academia._id}`}>
                <div className="w-[250px] h-[218px] rounded-[10px] border flex flex-col justify-between shadow-lg">
                  <div
                    className="portada h-[100px] rounded-t-[10px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${academia || "/default.jpg"})`,
                    }}
                  ></div>
                  <h1 className="text-l font-bold text-center p-2">
                    {academia.nombre_academia}
                  </h1>
                  <div className="p-3">
                    <p className="text-sm flex items-center gap-2">
                      {/* Reemplaza el ícono si es necesario */}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 10h11M9 21h11M17 3h11"
                        />
                      </svg>
                      {academia.telefono}
                    </p>
                    <p className="text-sm flex items-center gap-2">
                      <span className="font-bold">Disciplina:</span>{" "}
                      {academia.tipo_disciplina}
                    </p>
                    <p className="text-sm flex items-center gap-2">
                      <span className="font-bold">Descripción:</span>{" "}
                      {academia.descripcion}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
