import { useQuery } from 'react-query';
import { getConfig,  } from 'services';

function useGetConfig() {
  return useQuery({
    queryKey: 'CONFIG',
    queryFn: getConfig,
  });
}

export default useGetConfig;
