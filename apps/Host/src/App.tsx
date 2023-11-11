import * as React from 'react';

const PageAlpha = React.lazy(() => import('pageAlpha/App') as any);
const PageBeta = React.lazy(() => import('pageBeta/App') as any);

function App() {
  return (
    <>
      <h1>Host app</h1>
      <React.Suspense fallback={<div>Loading PageAlpha...</div>}>
        <PageAlpha />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading PageBeta...</div>}>
        <PageBeta />
      </React.Suspense>
    </>
  );
}

export default App;
