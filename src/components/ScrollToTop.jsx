// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // smooth সরিয়ে instant করলে সব পেজে কাজ করবে
    window.scrollTo(0, 0); 
    
    // বিকল্প হিসেবে যদি কাজ না করে তবে এটা ট্রাই করতে পারেন:
    // document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;