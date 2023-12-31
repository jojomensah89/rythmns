import { Song } from "@/types/stripe";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsByUser = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const { data:{session}, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  const { data: songs, error } = await supabase
    .from("songs")
    .select("*")
    .eq("user_id", session?.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }
  return (songs as any) || [];
};

export default getSongsByUser;
