import { ThemeProvider } from 'ui';
import withQueryClient from '../withQueryClient';
import { useGetConfig, useGetActors } from 'hooks';
import * as S from './App.styles';

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
      <S.AppContainer>
        <S.AppContainerTitle>Harry Potter and the Philosopher's Stone</S.AppContainerTitle>
        <S.AppContainerButton onClick={handleOnClick}>Get Actors</S.AppContainerButton>
        <S.AppContainerActorsList>
          {data?.map((actor: any) => {
            return (
              <S.AppContainerActorsListItem key={actor.id}>
                <S.AppContainerActorsListItemImg>
                  <img src={actor.profilePath} alt={actor.name} />
                </S.AppContainerActorsListItemImg>
                <S.AppContainerActorsListItemCharacter>{actor.name}</S.AppContainerActorsListItemCharacter>
                <S.AppContainerActorsListItemRealName>{actor.character}</S.AppContainerActorsListItemRealName>
              </S.AppContainerActorsListItem>
            );
          })}
        </S.AppContainerActorsList>
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default withQueryClient(App);
