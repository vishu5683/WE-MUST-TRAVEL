"use client";  // Ensure this is at the top

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from 'next/head';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff5722",
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>WE MUST TRAVEL</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: '1' }}>
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
