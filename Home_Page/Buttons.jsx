import { useEffect, useState } from "react";

function Buttons () {
    
    const [text, setText] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const fullText = "print(\"Hello, World!\")";
    const typingSpeed = 100; // Adjust typing speed (ms per letter)

    useEffect(() => {
        if (!isHovered) {
            setText(""); // Reset text when not hovered
            return;
        }

        let i = 0;
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [isHovered]);

    return(
        <div className="absolute top-[40%] w-4/5 flex justify-between">
            <a 
                href="#" 
                className="w-60 h-60 flex items-center justify-center text-center text-lg font-bold bg-white rounded-full border-4 border-black shadow-lg transition-transform duration-300 hover:scale-115 relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Container for Monitor + Text */}
                <div className="relative w-[80%] h-[75%] transition-transform duration-700">
                    {/* Typing Animation */}
                    <div className="absolute top-[30%] left-[3%] w-[65%] h-[20%] bg-black rounded-md flex items-start justify-start p-2 text-white font-mono text-xs leading-tight whitespace-pre">
                        <span>{text}</span>
                        <span className="animate-blink">|</span> {/* Blinking Cursor */}
                    </div>

                    {/* Monitor Image */}
                    <img src="/public/Monitor.png" alt="Monitor" className="w-full h-full object-cover" />
                </div>
            </a>

            <a href="" className="w-60 h-60 flex items-center justify-center text-center text-lg font-bold bg-white rounded-full border-4 border-black shadow-lg transition-transform duration-300 hover:scale-110 relative overflow-visible">
                <img 
                    src="/public/vinyl.png" 
                    alt="Vinyl" 
                    className="w-[75%] h-[75%] object-cover items-center transition-transform duration-700 hover:scale-115 hover:-rotate-[360deg] hover:z-10"
                />
            </a>
        </div>
    );
}

export default Buttons;