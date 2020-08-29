import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/index";
import Work from "../pages/work";
import Photo from "../pages/photo";
import About from "../pages/about";
// import NotFound from "../pages/404";
import Assistlist from "../pages/caseStudies/assistlist"
import Translink from "../pages/caseStudies/translink";
import Pokemondb from "../pages/caseStudies/pokemondb";
import Feedplus from "../pages/caseStudies/feedplus";
import CoopRadio from "../pages/caseStudies/coopradio";
import Genomic from "../pages/caseStudies/genomic";
import Ecommerce from "../pages/caseStudies/ecommerce";
import Spacebattle from "../pages/caseStudies/spacebattle";
import Concepts from "../pages/caseStudies/concepts";


import Header from "../components/Header/Header";
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
                    <Route path="/work/assistlist">
                        <Assistlist />
                    </Route>
                    <Route path="/work/translink">
                        <Translink />
                    </Route>
                    <Route path="/work/pokemondb">
                        <Pokemondb />
                    </Route>
                    <Route path="/work/feedplus">
                        <Feedplus />
                    </Route>
                    <Route path="/work/coopradio">
                        <CoopRadio />
                    </Route>
                    <Route path="/work/genomic">
                        <Genomic />
                    </Route>
                    <Route path="/work/ecommerce">
                        <Ecommerce />
                    </Route>
                    <Route path="/work/spacebattle">
                        <Spacebattle />
                    </Route>
                    <Route path="/work/concepts">
                        <Concepts />
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
                        {/* <NotFound /> */}
                        <Redirect to="/" />
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