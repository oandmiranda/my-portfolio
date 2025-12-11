import {
  IBM_Plex_Sans,
  Sora,
  Paytone_One,
  Allura

} from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

// export const devonshire = Devonshire({
//   weight: "400",
//   variable: "--font-devonshire",
//   subsets: ["latin"],
// });

export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const paytoneOne = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-paytone-one",
});

export const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});
