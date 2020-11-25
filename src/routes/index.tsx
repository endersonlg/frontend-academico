import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../components/Container';
import Bar from '../pages/Graphic/Bar';
import PizzaAge from '../pages/Graphic/Pizza/PizzaAge';
import PizzaCity from '../pages/Graphic/Pizza/PizzaCity';
import PizzaEtnia from '../pages/Graphic/Pizza/PizzaEtnia';
import PizzaFamilyIncome from '../pages/Graphic/Pizza/PizzaFamilyIncome';
import PizzaSchool from '../pages/Graphic/Pizza/PizzaSchool';
import PizzaSexo from '../pages/Graphic/Pizza/PizzaSexo';
import PizzaSituation from '../pages/Graphic/Pizza/PizzaSituation';
import PizzaState from '../pages/Graphic/Pizza/PizzaState';
import PizzaStateCity from '../pages/Graphic/Pizza/PizzaStateCity';
import TreeMapAge from '../pages/Graphic/TreeMap/TreeMapAge';
import Users from '../pages/Users';

const Routes = () => {
    return (
        <Container>
            <Switch>
                <Route path="/table-users" component={Users} />
                <Route path="/graphic/pizza/age" component={PizzaAge} />
                <Route path="/graphic/pizza/city" component={PizzaCity} />
                <Route path="/graphic/pizza/etnia" component={PizzaEtnia} />
                <Route
                    path="/graphic/pizza/familyIncome"
                    component={PizzaFamilyIncome}
                />
                <Route path="/graphic/pizza/school" component={PizzaSchool} />
                <Route path="/graphic/pizza/sexo" component={PizzaSexo} />
                <Route
                    path="/graphic/pizza/situation"
                    component={PizzaSituation}
                />
                <Route path="/graphic/pizza/state" component={PizzaState} />
                <Route
                    path="/graphic/pizza/stateCity"
                    component={PizzaStateCity}
                />
                <Route path="/graphic/tree-map/age" component={TreeMapAge} />
                <Route path="/graphic/bar" component={Bar} />
            </Switch>
        </Container>
    );
};
export default Routes;
