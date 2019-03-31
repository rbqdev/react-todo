import 'sanitize.css';
import '../assets/css/main.scss';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Router from './Router';
import ApolloClient from '../providers/apollo';

const App = () => (
    <ApolloProvider client={ApolloClient}>
        <Router />
    </ApolloProvider>
);

export default App;
