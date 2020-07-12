import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/index';
import Work from '../pages/work/work';
import Photo from '../pages/photo';
import About from '../pages/about';
// import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";

import { ThemeProvider } from "styled-components";
import { GlobalStyles, MenuCont, MainCont } from "../components/globalStyles";
import { useDarkMode } from "../components/hooks/useDarkMode";
import { lightTheme, darkTheme } from "../components/Theme";
import Toggle from "../components/Header/Toggler";
import { HeaderMainCont, HeaderSubCont } from "../components/Header/headerStyles";
import Logo from "../components/Header/Logo";
import Nav from "../components/Header/Nav";
import BottomBar from "../components/MobileVer/BottomBar";
import MobileHeader from "../components/MobileVer/MobileHeader";

const Routes = () => {

    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <Fragment>
            <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                {/* <Header /> */}
                <HeaderMainCont>
                    <HeaderSubCont>
                        <Logo />
                        <MenuCont>
                            <Nav />
                            <Toggle theme={theme} toggleTheme={themeToggler} />
                        </MenuCont>
                    </HeaderSubCont>
                </HeaderMainCont>
                <MobileHeader />
                <MainCont>
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
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </MainCont>
                <BottomBar />
            </ThemeProvider>
        </Fragment>
    );
}

export default Routes;