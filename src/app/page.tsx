import { createClient } from "@/lib/supabase";
import { ErrorBoundary } from "react-error-boundary";

import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import { Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import Error from "./error";
import Loading from "./loading";

interface HomeProps {
  searchParams: {
    session: string;
  };
}

export default async function Home() {
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
          <Stack bg={"#161622"} flex={1}>
            <Offer delivery={delivery as any} products={data} />

            <Slider />

            <Featured products={data} />
          </Stack>
        )}
      </Suspense>
    </ErrorBoundary>
  );
}
