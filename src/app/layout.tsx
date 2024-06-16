import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, MantineColorsTuple, MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Esport Pizza",
  description: "",
};

const pizzaColor: MantineColorsTuple = [
  '#fff6e0',
  '#ffeccb',
  '#ffd89a',
  '#fdc265',
  '#fdb038',
  '#fda41a',
  '#fc9e07',
  '#e28a00',
  '#c97900',
  '#af6700'
];

const theme = createTheme({
  colors: {
    pizzaColor,
  }
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript defaultColorScheme='dark' />
      </head>
      <body>
          <MantineProvider defaultColorScheme='dark' theme={theme}>
            {children}
          </MantineProvider>
          <Analytics />
      </body>
    </html>
  );
}