import ReactGA from "react-ga4";

// Initialize GA4
export const initGA = () => {
  ReactGA.initialize("G-1QXQ5TQDE7"); // Updated GA4 Measurement ID
};

// Log a pageview
export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
