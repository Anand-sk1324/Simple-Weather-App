import App from "./App";

import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
const Main = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default Main;
