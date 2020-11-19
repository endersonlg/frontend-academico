import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../components/Container';
import Users from '../pages/Users';

const Routes = () => {
    return (
        <Container>
            <Switch>
                <Route path="/users">
                    <Users />
                </Route>
                <Route path="*" />
            </Switch>
        </Container>
    );
};
export default Routes;
