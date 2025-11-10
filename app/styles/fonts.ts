import { Devonshire, Inter, Climate_Crisis
 } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});


export const evonshire = Devonshire({
  weight: "400",
  variable: "--font-devonshire",
  subsets: ["latin"],
}); 

// title font
export const climateCrisis = Climate_Crisis({
  weight: "400",
  variable: "--font-climate-crisis",
  subsets: ["latin"],
});