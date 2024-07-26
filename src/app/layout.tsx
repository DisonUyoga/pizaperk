import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";
import { Toaster } from "react-hot-toast";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import NavBar from "@/components/ui/NavBar";
import "aos/dist/aos.css";
import AosProvider from "@/components/AosProvider";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Footer from "@/components/Footer";
import { currentUser, auth } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PizzaPerk",
  description:
    "Discover PizzaPerk: Your Crave-Worthy Shortcut to Delicious Pizza Bliss!",
};

export default async function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  const user = await currentUser();
  const { data: session, error: sessionError } =
    await createClient().auth.getSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ChakraProvider>
            <ReduxProvider>
              <AosProvider>
                <Stack className="h-screen" bg={"#161622"}>
                  <Navbar />
                  <main className="mt-20 h-screen">
                    {children}

                    <Footer />
                  </main>
                </Stack>
                <Toaster
                  position="top-center"
                  toastOptions={{
                    duration: 3000,
                    success: {
                      duration: 5000,
                    },
                  }}
                />
              </AosProvider>
            </ReduxProvider>
          </ChakraProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
