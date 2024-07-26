import { createClient } from "@/lib/supabase";
import { currentUser } from "@clerk/nextjs/server";

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
  return <main>{children}</main>;
}
