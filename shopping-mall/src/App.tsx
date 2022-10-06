import { QueryClientProvider } from "@tanstack/react-query";
import { useRoutes } from "react-router-dom";
import { getClient } from "./queryClinet";
import { routes } from "./routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App = () => {
  const element = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      {element}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
