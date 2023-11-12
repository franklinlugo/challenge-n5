import { QueryClient, QueryClientProvider } from 'react-query';

const withQueryClient = <P extends object>(Component: React.ComponentType<P>) => {
  const queryClient = new QueryClient();
  return (props: P) => (
    <QueryClientProvider client={queryClient}>
      <Component {...props} />
    </QueryClientProvider>
  );
};

export default withQueryClient;
