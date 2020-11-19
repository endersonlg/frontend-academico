import React from 'react';
import { Router } from 'react-router-dom';
import history from './service/history';
import Routes from './routes';

import GlobalStyle from './style/GlobalStyle';
import { ApolloProvider } from '@apollo/client';
import Graphql from './service/graphql';

const App: React.FC = () => {
    return (
        <ApolloProvider client={Graphql}>
            <Router history={history}>
                <Routes />
                <GlobalStyle />
            </Router>
        </ApolloProvider>
    );
};

export default App;
