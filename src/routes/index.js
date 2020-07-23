import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/index';
import Work from '../pages/work';
import Photo from '../pages/photo';
import About from '../pages/about';
import Translink from "../pages/caseStudies/translink";
import NotFound from "../pages/404";

import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/Header/MobileVer/BottomBar";
import MobileHeader from "../components/Header/MobileVer/MobileHeader";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { useDarkMode } from "../components/hooks/useDarkMode";
import { lightTheme, darkTheme } from "../components/Theme";
import Toggle from "../components/ThemeToggle/Toggle";


const Routes = () => {

    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <Fragment>
            <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <Header>
                    <Toggle theme={theme} toggleTheme={themeToggler} />
                </Header>
                <MobileHeader />
                <Switch>
                    <Route path="/work/translink">
                        <Translink />
                    </Route>
                    <Route exact path="/work">
                        <Work />
                    </Route>
                    <Route exact path="/photo">
                        <Photo />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*" >
                        <NotFound />
                        {/* <Redirect to="/" /> */}
                    </Route>
                </Switch>
                <Footer />
                <BottomBar>
                    <Toggle theme={theme} toggleTheme={themeToggler} />
                </BottomBar>
            </ThemeProvider>
        </Fragment>
    );
}

export default Routes;