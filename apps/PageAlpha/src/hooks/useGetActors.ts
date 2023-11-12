import { useQuery } from 'react-query';
import { getActors, Actors,  Config } from 'services';

function useGetActors({ configData }: { configData: Config | undefined }) {
  const BASE_URL = configData?.images?.base_url;
  const POSTER_SIZE = configData?.images?.poster_sizes[0];

  const mapData = (data: Actors) => {
    return data.cast
      .filter((actor) => actor.profile_path)
      .map((actors) => ({
        id: actors.id,
        name: actors.name,
        character: actors.character,
        profilePath: `${BASE_URL}${POSTER_SIZE}${actors.profile_path}`,
      }));
  };

  return useQuery({
    queryKey: 'ACTORS',
    queryFn: getActors,
    enabled: false,
    select: mapData,
  });
}

export default useGetActors;