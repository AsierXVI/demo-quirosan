import { Inter } from "next/font/google";
import { clinicData } from "@/data/clinic";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    clinicData.seo?.title ??
    `${clinicData.name} | ${clinicData.specialty} en ${clinicData.city}`,
  description:
    clinicData.seo?.description ??
    `${clinicData.specialty} y salud integral en ${clinicData.city}. Alivia el dolor sin esperas. Pide cita por WhatsApp.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
