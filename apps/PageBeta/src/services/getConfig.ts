type ImageSizes = 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w342' | 'w500' | 'w780' | 'w1280' | 'h632' | 'original';

interface Images {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: ImageSizes[];
  logo_sizes: ImageSizes[];
  poster_sizes: ImageSizes[];
  profile_sizes: ImageSizes[];
  still_sizes: ImageSizes[];
}

type ChangeKeys =
  | 'adult'
  | 'air_date'
  | 'also_known_as'
  | 'alternative_titles'
  | 'biography'
  | 'birthday'
  | 'budget'
  | 'cast'
  | 'certifications'
  | 'character_names'
  | 'created_by'
  | 'crew'
  | 'deathday'
  | 'episode'
  | 'episode_number'
  | 'episode_run_time'
  | 'freebase_id'
  | 'freebase_mid'
  | 'general'
  | 'genres'
  | 'guest_stars'
  | 'homepage'
  | 'images'
  | 'imdb_id'
  | 'languages'
  | 'name'
  | 'network'
  | 'origin_country'
  | 'original_name'
  | 'original_title'
  | 'overview'
  | 'parts'
  | 'place_of_birth'
  | 'plot_keywords'
  | 'production_code'
  | 'production_companies'
  | 'production_countries'
  | 'releases'
  | 'revenue'
  | 'runtime'
  | 'season'
  | 'season_number'
  | 'season_regular'
  | 'spoken_languages'
  | 'status'
  | 'tagline'
  | 'title'
  | 'translations'
  | 'tvdb_id'
  | 'tvrage_id'
  | 'type'
  | 'video'
  | 'videos';

export interface Config {
  images: Images;
  change_keys: ChangeKeys[];
}

function getConfig(): Promise<Config> {
  const API_KEY = import.meta.env.CHALLENGE_N5_API_KEY;
  const URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;
  return fetch(URL).then((res) => res.json());
}

export default getConfig;
