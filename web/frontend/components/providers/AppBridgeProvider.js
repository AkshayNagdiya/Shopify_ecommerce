// src/providers/AppBridgeProvider.js

import React, { createContext, useContext, useEffect, useState } from "react";
import { AppBridge } from "@shopify/app-bridge";
import { Provider } from "@shopify/app-bridge-react";
import { useLocation } from "react-router-dom";

// Create a context to hold the App Bridge instance
const AppBridgeContext = createContext(null);

// Define the AppBridgeProvider component
export function AppBridgeProvider({ children }) {
  const location = useLocation();
  const [appBridge, setAppBridge] = useState(null);

  useEffect(() => {
    // Initialize App Bridge
    const app = AppBridge({
      apiKey: process.env.REACT_APP_SHOPIFY_API_KEY,
      shopOrigin: process.env.REACT_APP_SHOPIFY_SHOP_ORIGIN,
      forceRedirect: true,
    });
    setAppBridge(app);
  }, [location]);

  return (
    <AppBridgeContext.Provider value={appBridge}>
      {appBridge ? <Provider config={appBridge}>{children}</Provider> : null}
    </AppBridgeContext.Provider>
  );
}

// Custom hook to use AppBridge context
export function useAppBridge() {
  return useContext(AppBridgeContext);
}
