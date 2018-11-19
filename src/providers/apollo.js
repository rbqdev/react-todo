import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjonfjs0odcse0135ktmct32h',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;
