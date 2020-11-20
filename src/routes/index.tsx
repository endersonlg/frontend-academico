import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../components/Container';
import Pizza from '../pages/Graphic/Pizza';
import Users from '../pages/Users';

const Routes = () => {
    return (
        <Container>
            <Switch>
                <Route path="/table-users" component={Users} />
                <Route path="/graphic/pizza" component={Pizza} />
                <Route path="*" component={Pizza} />
            </Switch>
        </Container>
    );
};
export default Routes;
