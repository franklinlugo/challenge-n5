export interface Actors  {
  id: number;
  cast: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }[];
};

function getActors(): Promise<Actors> {
  const VAN_HELSING = 7131;
  const API_KEY = import.meta.env.CHALLENGE_N5_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/${VAN_HELSING}/credits?api_key=${API_KEY}`;
  return fetch(URL).then((res) => res.json());
}

export default getActors;
