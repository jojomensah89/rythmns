import { Song } from "@/types/stripe";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { data } from "autoprefixer";
import { cookies } from "next/headers";

const getLikedSongsByUser = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  const { data, error } = await supabase
    .from("songs")
    .select("*,song(*)")
    .eq("user_id", session?.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    return [];
  }
  if (!data) {
    return [];
  }

  return data.map((item) => ({ ...item.songs }));
};

export default getLikedSongsByUser;
