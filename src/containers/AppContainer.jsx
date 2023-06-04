import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import { Page } from "../components/pages";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from "react-swipeable-views";
import { About, Comments, Contact, Home, Resume } from "../pages";
import Projects from "../pages/Projects";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [isMdUp]);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  const handlePageChange = index => {
    setPageNumber(index);
  }

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageChange}>
            <Page pageNumber={pageNumber} index={0}>
              <Home helmetTitle="وب سایت آرش حسینی | صفحه اصلی" />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About helmetTitle="وب سایت آرش حسینی | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle="وب سایت آرش حسینی | رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Projects helmetTitle="وب سایت آرش حسینی | نمونه کارها" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle="وب سایت آرش حسینی | نظرات همکاران" />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitle="وب سایت آرش حسینی | ارتباط با من" />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
