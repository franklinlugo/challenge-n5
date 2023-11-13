import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import * as S from './App.styles';

const PageAlpha = React.lazy(() => import('pageAlpha/App') as any);
const PageBeta = React.lazy(() => import('pageBeta/App') as any);

function App() {
  const [lang, setLang] = React.useState<'ES' | 'EN'>('EN');

  const handleLangChange = () => {
    setLang(lang === 'ES' ? 'EN' : 'ES');
  };

  const fallbackRender = () => {
    /**
     * For development and challenge purposes
     * force reload the page when an error occurs on first render when remote pages are still not served
     *  and avoid reload browser manually
     */
    location.reload();
    return null;
  };

  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <S.AppContainer>
        <S.AppContainerTitle>Movies App</S.AppContainerTitle>
        <S.AppContainerLang onClick={handleLangChange}>{lang}</S.AppContainerLang>
        <S.AppContainerContent>
          <React.Suspense fallback={<div>Loading PageAlpha...</div>}>
            <PageAlpha lang={lang} />
          </React.Suspense>
          <React.Suspense fallback={<div>Loading PageBeta...</div>}>
            <PageBeta lang={lang} />
          </React.Suspense>
        </S.AppContainerContent>
      </S.AppContainer>
    </ErrorBoundary>
  );
}

export default App;
