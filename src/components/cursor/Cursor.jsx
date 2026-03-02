import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "./Cursor.css"

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
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
    }, []);

    return (
        <motion.div 
            className="cursor" 
            animate={{ 
                x: position.x + 10, 
                y: position.y + 10,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
};

export default Cursor;
