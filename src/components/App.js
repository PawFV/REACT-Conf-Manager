import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Footer from '../components/Footer'
import NotFound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}



export default App;

