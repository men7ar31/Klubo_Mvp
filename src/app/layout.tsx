import Providers from "./Providers";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <div className="container mx-auto">{children}</div>
           <Navbar /> 
        </Providers>
      </body>
    </html>
  );
}



// className="flex flex-col gap-10 items-center p-10"//