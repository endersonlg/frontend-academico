import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../components/Container';
import BarAge from '../pages/Graphic/Bar/BarAge';
import BarCity from '../pages/Graphic/Bar/BarCity';
import BarEtnia from '../pages/Graphic/Bar/BarEtnia';
import BarFamilyIncome from '../pages/Graphic/Bar/BarFamilyIncome';
import BarSchool from '../pages/Graphic/Bar/BarSchool';
import BarSexo from '../pages/Graphic/Bar/BarSexo';
import BarSituation from '../pages/Graphic/Bar/BarSituation';
import BarState from '../pages/Graphic/Bar/BarState';
import BarStateCity from '../pages/Graphic/Bar/BarStateCity';
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
import TreeMapCity from '../pages/Graphic/TreeMap/TreeMapCity';
import TreeMapEtnia from '../pages/Graphic/TreeMap/TreeMapEtnia';
import TreeMapFamilyIncome from '../pages/Graphic/TreeMap/TreeMapFamily';
import TreeMapSchool from '../pages/Graphic/TreeMap/TreeMapSchool';
import TreeMapSexo from '../pages/Graphic/TreeMap/TreeMapSexo';
import TreeMapSituation from '../pages/Graphic/TreeMap/TreeMapSituation';
import TreeMapState from '../pages/Graphic/TreeMap/TreeMapState';
import TreeMapStateCity from '../pages/Graphic/TreeMap/TreeMapStateCity';
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

                <Route path="/graphic/bar/age" component={BarAge} />
                <Route path="/graphic/bar/city" component={BarCity} />
                <Route path="/graphic/bar/etnia" component={BarEtnia} />
                <Route
                    path="/graphic/bar/familyIncome"
                    component={BarFamilyIncome}
                />
                <Route path="/graphic/bar/school" component={BarSchool} />
                <Route path="/graphic/bar/sexo" component={BarSexo} />
                <Route path="/graphic/bar/situation" component={BarSituation} />
                <Route path="/graphic/bar/state" component={BarState} />
                <Route path="/graphic/bar/stateCity" component={BarStateCity} />

                <Route path="/graphic/tree-map/age" component={TreeMapAge} />
                <Route path="/graphic/tree-map/city" component={TreeMapCity} />
                <Route
                    path="/graphic/tree-map/etnia"
                    component={TreeMapEtnia}
                />
                <Route
                    path="/graphic/tree-map/familyIncome"
                    component={TreeMapFamilyIncome}
                />
                <Route
                    path="/graphic/tree-map/school"
                    component={TreeMapSchool}
                />
                <Route path="/graphic/tree-map/sexo" component={TreeMapSexo} />
                <Route
                    path="/graphic/tree-map/situation"
                    component={TreeMapSituation}
                />
                <Route
                    path="/graphic/tree-map/state"
                    component={TreeMapState}
                />
                <Route
                    path="/graphic/tree-map/stateCity"
                    component={TreeMapStateCity}
                />
            </Switch>
        </Container>
    );
};
export default Routes;
