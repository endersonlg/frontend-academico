import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './service/history';
import Routes from './routes';

import GlobalStyle from './style/GlobalStyle';
import { ApolloProvider } from '@apollo/client';
import Graphql from './service/graphql';

const App: React.FC = () => {
    return (
        <ApolloProvider client={Graphql}>
            <Router>
                <Routes />
                <GlobalStyle />
            </Router>
        </ApolloProvider>
    );
};

export default App;
