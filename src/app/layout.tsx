import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";
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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PizzaPerk",
  description:
    "Discover PizzaPerk: Your Crave-Worthy Shortcut to Delicious Pizza Bliss!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ChakraProvider>
            <ReduxProvider>
              <AosProvider>
                <NavBar />
                {children}
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
