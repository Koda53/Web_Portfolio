import { useState, useEffect } from "react";

function Quotes ()
{
    const quotes = [
        'You only get one chance to make a first impression.',
        "You won't know how great something is util you finish all the additional parts.",
        "What you put in is what you get.",
        "Be Present."
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000); // Change quote every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return(
        <section id="footer" className="h-[15vh] flex flex-col justify-center items-center text-center bg-gray-200 text-lg gap-8">
            <p className="text-xl font-semibold">{quotes[index]}</p>
        </section>
    );
}

export default Quotes;