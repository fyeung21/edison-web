import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/index';
import Work from '../pages/work';
import Photo from '../pages/photo';
import About from '../pages/about';
import Translink from "../pages/detailsPages/translink";

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
                    <Route path="/translink">
                        <Translink />
                    </Route>
                    <Route path="/work">
                        <Work />
                    </Route>
                    <Route path="/photo">
                        <Photo />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
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