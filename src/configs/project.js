import {env} from "./env"

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export default {
  title: "Romain Flori-Cantrelle",
  description: "Portfolio de Romain Flori Cantrelle, développeur fullstack en recherche d'emploi",
  images: "rfc_logo.png",
  lang: "fr",
  metadataBase: env.BASE_URL,
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
  icons: {
    icon: "/rfc_logo.png",
    shortcut: "/rfc_logo.png",
    apple: "/rfc_logo.png",
    other: {
      rel: "favicon",
      url: "/rfc_logo.png",
    },
  },
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
  openGraph: {
    title: "Romain Flori-Cantrelle",
    description: "Portfolio de Romain Flori Cantrelle, développeur fullstack en recherche d'emploi",
    url: env.BASE_URL,
    siteName: "Romain Flori-Cantrelle",
    images: [
      {
        url: `${env.BASE_URL}/rfc_logo.png`,
        width: 800,
        height: 600,
        alt: "Image",
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/rfc_logo.png`,
        width: 1800,
        height: 1600,
        alt: "Custom image alt",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
}
