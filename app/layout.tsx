export const metadata = {
  title: "Adriana Marcela Corona Gordillo — Portafolio",
  description: "Ingeniera de Software · Desarrolladora Java",
};

import "./../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
