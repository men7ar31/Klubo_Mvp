"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();

  // Mostrar un loader mientras se verifica la sesión
  if (status === "loading") return null;


  if (!session) return null;

  const userRole = session.user?.role; 

  return (
    <nav
      className="shadow-xl border h-[65px] w-[351px] rounded-full flex justify-center fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white"
      style={{ zIndex: 50 }}
    >
      <div className="flex w-full items-center">
        <Link className="w-[28%] flex justify-center" href="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 0 24 24"
            width="35px"
            fill="#333"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </Link>

        <ul className="flex w-[82%] justify-around items-center">
          {userRole === "dueño de academia" ? (
            <>
            <li>
                <Link href="/academias/solicitudes">
                <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512">
                <path fill="#333333" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
                </Link>
              </li>
              <li>
                <Link href="/academias">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="35px"
                    viewBox="0 0 24 24"
                    width="35px"
                    fill="#333"
                  >
                    <rect fill="none" height="24" width="24" />
                    <g>
                      <path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z" />
                    </g>
                  </svg>
                </Link>
              </li>
              
              
              <li>
                <Link href="/dashboard/profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="35px"
                    viewBox="0 0 24 24"
                    width="35px"
                    fill="#333"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/dashboard/profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="35px"
                    viewBox="0 0 24 24"
                    width="35px"
                    fill="#333"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
