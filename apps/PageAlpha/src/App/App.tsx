import * as React from 'react';
import { ThemeProvider } from 'ui';
import withQueryClient from '../withQueryClient';
import { useGetConfig, useGetActors } from 'hooks';
import './i18n';
import * as S from './App.styles';
import { useTranslation } from 'react-i18next';

interface AppProps {
  lang: 'ES' | 'EN';
}

function App({ lang }: AppProps) {
  const { isLoading, data: configData } = useGetConfig();
  const { data, refetch } = useGetActors({ configData });

  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const handleOnClick = () => {
    refetch();
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ThemeProvider>
      <S.AppContainer>
        <S.AppContainerTitle>{t('title')}</S.AppContainerTitle>
        <S.AppContainerButton onClick={handleOnClick}>{t('getActors')}</S.AppContainerButton>
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
