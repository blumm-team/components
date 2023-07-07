import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
       
        if (typeof window !== "undefined") {
            
            function handleResize() {
                
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }

            
            window.addEventListener("resize", handleResize);
            handleResize();

            
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); 
    return windowSize;
};

export default useWindowSize;