import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, logPageView } from "./analytics";

const AnalyticsWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    initGA(); // initialize GA once
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search); // log every route change
  }, [location]);

  return children;
};

export default AnalyticsWrapper;
