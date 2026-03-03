import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "./Cursor.css"

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const hideCursor = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseleave", hideCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", hideCursor);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <motion.div 
            className="cursor" 
            style={{
                x: position.x + 10,
                y: position.y + 10,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
};

export default Cursor;
