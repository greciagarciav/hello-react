import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import BadgeEdit from '../pages/BadgeEdit';

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <Home /> 
                    </Route>
                    <Route path="/badges" exact>
                        <Badges /> 
                    </Route>
                    <Route path="/badges/new" exact>
                        <BadgeNew />
                    </Route>
                    <Route path="/badges/:badgeId/edit" exact>
                        <BadgeEdit />
                    </Route>
                    <Route >
                        <NotFound />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;