import React from "react";
import { currentUser, auth } from "@clerk/nextjs/server";
import { createClient } from "@/lib/supabase";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import Error from "../error";

const SupabaseAuth = async () => {
  const user = await currentUser();

  if (user?.emailAddresses[0].emailAddress && user?.fullName) {
    const { data, error } = await createClient().auth.signUp({
      email: user?.emailAddresses[0].emailAddress,
      password: user.fullName,
    });
    if (data || "User already registered") {
      const { data, error } = await createClient().auth.signInWithPassword({
        email: user?.emailAddresses[0].emailAddress,
        password: user.fullName,
      });

      if (error) return;
      return redirect("/");
    }
  }

  return <Error name={"Something went wrong please try again"} message="" />;
};

export default SupabaseAuth;