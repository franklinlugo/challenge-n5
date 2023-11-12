import * as React from 'react';
import * as S from './App.styles';

const PageAlpha = React.lazy(() => import('pageAlpha/App') as any);
const PageBeta = React.lazy(() => import('pageBeta/App') as any);

function App() {
  const [lang, setLang] = React.useState<'ES' | 'EN'>('ES');

  const handleLangChange = () => {
    setLang(lang === 'ES' ? 'EN' : 'ES');
  };

  return (
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
  );
}

export default App;
