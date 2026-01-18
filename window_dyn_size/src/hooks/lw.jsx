import { useState,useEffect } from "react";
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        function handleresize(){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleresize);
        return () => window.removeEventListener("resize", handleresize);
    }, []);
    return windowSize;
}

export default useWindowSize;