import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/index';
import Work from '../pages/work/work';
import Photo from '../pages/photo';
import About from '../pages/about';
import Contact from '../pages/contact';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { useDarkMode } from "../components/hooks/useDarkMode";
import { lightTheme, darkTheme } from "../components/Theme";
import Toggle from "../components/Header/Toggler";

const Routes = () => {

    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <Fragment>
            <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <Header />
                <Toggle theme={theme} toggleTheme={themeToggler} />
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
                <Footer />
            </ThemeProvider>
        </Fragment>
    );
}

export default Routes;