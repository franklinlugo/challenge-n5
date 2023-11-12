import { ThemeProvider } from 'ui';
import withQueryClient from '../withQueryClient';
import { useGetConfig, useGetActors } from 'hooks';

function App() {
  const { isLoading, data: configData } = useGetConfig();
  const { data, refetch } = useGetActors({ configData });

  const handleOnClick = () => {
    refetch();
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ThemeProvider>
      <h1>Harry Potter and the Philosopher's Stone</h1>
      <button onClick={handleOnClick}>Click me</button>
      {data?.map((actor: any) => {
        return (
          <div key={actor.id}>
            <img src={actor.profilePath} alt={actor.name} />
            <h3>{actor.name}</h3>
            <h4>{actor.character}</h4>
          </div>
        );
      })}
    </ThemeProvider>
  );
}

export default withQueryClient(App);
