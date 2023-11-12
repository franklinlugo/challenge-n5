import * as React from 'react';
import * as S from './App.styles';

const PageAlpha = React.lazy(() => import('pageAlpha/App') as any);
const PageBeta = React.lazy(() => import('pageBeta/App') as any);

function App() {
  return (
    <S.AppContainer>
      <S.AppContainerTitle>Movies App</S.AppContainerTitle>
      <S.AppContainerContent>
        <React.Suspense fallback={<div>Loading PageAlpha...</div>}>
          <PageAlpha />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading PageBeta...</div>}>
          <PageBeta />
        </React.Suspense>
      </S.AppContainerContent>
    </S.AppContainer>
  );
}

export default App;
