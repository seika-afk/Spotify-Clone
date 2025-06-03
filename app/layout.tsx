import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar"
import Player from "@/components/Player"

import SupabaseProvider from "@/providers/SupabaseProviders"
import UserProvider from "@/providers/UserProvider"
import ModalProvider from "@/providers/ModalProvider"
import ToasterProvider from "@/providers/ToasterProvider"

import getSongsByUserId from "@/actions/getSongsByUserId";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify >_=",
  description: "listen music",
};

export const revalidate=0; 
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userSongs=await getSongsByUserId();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <ToasterProvider/>
       <SupabaseProvider>
       <UserProvider>
       <ModalProvider/>
       <Sidebar songs={userSongs}>
      
        {children}
</Sidebar>
                  
<Player/>

                  </UserProvider>
                  
                  </SupabaseProvider>
                  
                  </body>
    </html>
  );
}


