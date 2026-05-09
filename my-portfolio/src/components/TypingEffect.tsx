import { useEffect, useState } from "react";
interface Props {
    text: string;
}

export default function TypingEffect({ text }: Props) {

    const [idx, setIdx] = useState<number>(0);
    const [currentText, setCurrentText] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx((prev) => {
                const next = (prev + 1) % text.length;
                setCurrentText(text.slice(0, next));
                return next;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <div key={idx}>
            {currentText}|
        </div>
    );
}