import { store } from "@/features/store";
import { createClient } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { ErrorBoundary } from "react-error-boundary";

import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";
import Error from "./error";
import { Suspense } from "react";
import Loading from "./loading";
import Featured from "@/components/Featured";
import { downloadImage } from "./action";
import { Stack } from "@chakra-ui/react";
import Slider from "@/components/Slider";
import Offer from "@/components/Offer";
import { currentUser, auth } from "@clerk/nextjs/server";

interface HomeProps {
  searchParams: {
    session: string;
  };
}

export default async function Home() {
  const user = await currentUser();
  const { data: session, error: sessionError } =
    await createClient().auth.getSession();
  // check whether clerk user is logged in
  if (!user) {
    return redirect("/sign-in");
  }
  if (!session.session) {
    return redirect("/sign-in");
  }

  const { data, error } = await createClient()
    .from("products")
    .select("*, categories(*)")
    .order("created_at", { ascending: false });
  const { data: delivery, error: deliveryError } = await createClient()
    .from("delivery")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <ErrorBoundary
      fallback={<Error name={error?.code} message={error?.message} />}
    >
      <Suspense fallback={<Loading />}>
        {data && delivery && data?.length > 0 && delivery?.length > 0 && (
          <Stack bg={"#161622"}>
            <Offer delivery={delivery as any} products={data} />

            <Slider />

            <Featured products={data} />
          </Stack>
        )}
      </Suspense>
    </ErrorBoundary>
  );
}
