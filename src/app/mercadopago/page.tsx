"use client"; // Esto indica que este archivo es un Client Component
import { useEffect, useState } from "react";
import TopContainer from "@/components/TopContainer";
import MercadoPagoimagen from "../../../public/assets/MercadoPago.png";

const Mp = () => {
  return (
    <>
      <TopContainer></TopContainer>
      <div>
  <h1 className="font-bold mt-5 pl-2 text-lg">
    Credenciales Mercado Pago
  </h1>
  <form action="" className="flex flex-col items-center gap-6">
    <p className="font-light text-sm pl-2 mt-10 self-start">
      Credenciales de producción
    </p>

    <div className="relative w-[95%]">
      <input
        type="text"
        id="publicKey"
        placeholder=" "
        className="peer w-full h-[50px] px-4 border border-gray-300 rounded-md bg-transparent text-sm outline-none focus:border-[#FF9A3D] focus:ring-1 focus:ring-[#FF9A3D] transition-all duration-200"
      />
      <label
        htmlFor="publicKey"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#FF9A3D]"
      >
        Public Key  <span className="text-red-600">*</span>
      </label>
    </div>

    <div className="relative w-[95%]">
      <input
        type="text"
        id="accessToken"
        placeholder=" "
        className="peer w-full h-[50px] px-4 border border-gray-300 rounded-md bg-transparent text-sm outline-none focus:border-[#FF9A3D] focus:ring-1 focus:ring-[#FF9A3D] transition-all duration-200"
      />
      <label
        htmlFor="accessToken"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#FF9A3D]"
      >
        Access Token <span className="text-red-600">*</span>
      </label>
    </div>

    <p className="font-light text-sm pl-2 self-start text-[#bcbcbc]">
      Habilita a los checkout de mercado pago para recibir pagos reales en la app
    </p>

    <button className="w-[95%] bg-[#FF9A3D] h-[40px] rounded-md mt-10 text-[#333] text-sm font-medium hover:bg-[#e88a35] transition-colors">
      Guardar
    </button>
  </form>
</div>

    </>
  );
};

export default Mp;
