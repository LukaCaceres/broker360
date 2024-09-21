// Hook para manejar la animación de escritura de texto

import { useState, useEffect } from "react";
const useTypingAnimation = (text1, text2, delay = 100) => {
    const [text, setText] = useState('Soluciones sin ');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(delay);
    const fullText = loopNum % 2 === 0 ? text1 : text2;

    useEffect(() => {
        const handleTyping = () => {
            if (isDeleting) {
                setText((prev) => fullText.slice(0, prev.length - 1));
                setTypingSpeed(100); // Velocidad al borrar
            } else {
                setText((prev) => fullText.slice(0, prev.length + 1));
                setTypingSpeed(150); // Velocidad al escribir
            }

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === 'Soluciones sin ') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, fullText, typingSpeed]);

    return text;
};

export default useTypingAnimation;