import { Roboto, Roboto_Condensed, Lusitana } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '900'],
});

console.log("Police d'écriture de GOOGLE FONTS : ", roboto);

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
});

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export { roboto, robotoCondensed, lusitana };
