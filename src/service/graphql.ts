import {
    ApolloClient,
    ApolloLink,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';

const Retry = new RetryLink({
    delay: {
        initial: 5000,
        max: 10000,
        jitter: true,
    },
    attempts: {
        max: Infinity,
        retryIf: ({ statusCode }, _operation) => statusCode >= 499,
    },
});

const Http = createHttpLink({ uri: 'http://localhost:3333/graphql' });

const Graphql = new ApolloClient({
    link: ApolloLink.concat(Http, Retry),
    cache: new InMemoryCache(),
});

export default Graphql;
