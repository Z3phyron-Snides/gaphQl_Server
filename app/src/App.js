
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./routes";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})


function App() {


  return (
    <div className="App">
      <ApolloProvider client={client}>
         <div className="App">
          <RouterProvider router={router} />
          <Toaster />
        </div>
    </ApolloProvider>
    </div>
  );
}

export default App;
