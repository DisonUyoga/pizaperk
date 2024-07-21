"use client";

import {
  processingAuth,
  sessionToken,
  setAdmin,
  setUser,
} from "@/features/slices/AuthSlice";
import { store } from "@/features/store";
import { supabase } from "@/lib/clientSupabase";
import Aos from "aos";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChildLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    Aos.init();
    const fetchSession = async () => {
      store().dispatch(processingAuth({ authLoading: true }));
      const { data, error } = await supabase.auth.getSession();

      try {
        if (data.session?.access_token) {
          store().dispatch(
            sessionToken({
              session: {
                email: data.session.user.email,
                name: data.session.user.email,
              },
            })
          );
          store().dispatch(setUser({ user: data.session }));
          const { data: profileData, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", data.session.user.id)
            .single();
          if (profileData?.group === "ADMIN") {
            store().dispatch(setAdmin({ isAdmin: true }));
          }
        } else {
          router.push("/login");
        }
      } catch (error) {
      } finally {
        store().dispatch(processingAuth({ authLoading: false }));
      }
    };
    fetchSession();
    supabase.auth.onAuthStateChange((_event, session) => {
      store().dispatch(setUser({ user: session }));
      if (session) {
        store().dispatch(
          sessionToken({
            session: {
              email: session.user.email,
              name: session.user.email,
            },
          })
        );
        router.push(`/?session=${session}`);
      }
    });
  }, [router]);

  return <main>{children}</main>;
}
