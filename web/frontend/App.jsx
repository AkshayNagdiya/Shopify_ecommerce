import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import {
  QueryProvider,
  PolarisProvider,
  Navigationbar,
  TopBar,
} from "./components";

export default function App() {
  // Dynamic import of pages
  const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)", {
    eager: true,
  });

  // Optional: useTranslation if needed
  const { t } = useTranslation();

  return (
    <PolarisProvider>
      <BrowserRouter>
        <QueryProvider>
          <NavMenu navigationLinks={[]} />
          <div className="main-section">
            <div className="menu-section">
              <Navigationbar />
            </div>
            <div className="content-section">
              <TopBar />
              <Routes pages={pages} />
            </div>
          </div>
        </QueryProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
