import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/index';
import Work from '../pages/work/work';
import Photo from '../pages/photo';
import About from '../pages/about';
import Contact from '../pages/contact';

const Routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route path="/work">
                    <Work />
                </Route>
                <Route path="/photo">
                    <Photo />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Fragment>
    );
}

export default Routes;