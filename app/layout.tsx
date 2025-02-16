import type { Metadata } from 'next';
import { roboto, robotoCondensed } from '@/app/ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dashbord',
  description:
    "Création d'un tableau de bord avec nextJs, création d\'une application nextJS Ap Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${roboto.className} ${robotoCondensed.className} antialiased`}
      >
        <header>
          <h1>Mon Site </h1>
        </header>
        {children}
        <footer>
          <p>&copy;{new Date().getFullYear()} - Tous droits réservés</p>
        </footer>
      </body>
    </html>
  );
}
