import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import { store } from "./stores/app.store";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigations/navigation";

const queryClient = new QueryClient();

export function App() {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <RouterProvider router={router} />
                </ChakraProvider>
            </QueryClientProvider>
        </Provider>
    );
}
