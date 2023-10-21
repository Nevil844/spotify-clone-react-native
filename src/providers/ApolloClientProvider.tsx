import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
    uri: 'https://azcoitia.stepzen.net/api/handy-wolf/__graphql',
    headers: {
        Authorization: 'apikey azcoitia::stepzen.net+1000::fb8e31b5fb9a7521aca53ce3d8ef5b43f2392865a30c1098cb4db5962713b133',
    },
    cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloClientProvider;
;