
function Footer () {
    return(
        <section id="footer" className="h-[25vh] flex flex-col justify-center items-center text-center bg-gray-200 text-lg gap-8">
        <div id="Socials">
            <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/joel-sedillo-b48057280/" target="_blank" rel="noopener noreferrer">
                    <img src="/public/linkedin.png" alt="LinkedIn" className="hover:bg-emerald-300 px-1 py-1 rounded w-14 h-14 " />
                </a>
                <a href="https://github.com/Koda53" target="_blank" rel="noopener noreferrer">
                    <img src="/public/github.png" alt="Github Profile" className="hover:bg-emerald-300 px-1 py-1 rounded w-14 h-14 " />
                </a>
                <a href="https://www.instagram.com/_just_joel__/" target="_blank" rel="noopener noreferrer">
                    <img src="/public/IG.png" alt="Instagram" className="hover:bg-emerald-300 px-1 py-1 rounded w-14 h-14 " />
                </a>
                <a href="https://open.spotify.com/user/r0x6o8eyhvw5bx25a8ktp30h5?si=d64f3126476f4bc9" target="_blank" rel="noopener noreferrer">
                    <img src="/public/spotify.png" alt="Spotify Profile" className="hover:bg-emerald-300 px-1 py-1 rounded w-14 h-14 " />
                </a>
            </div>
        </div>

        <div className="flex items-center gap-1">
            <span>© 2025 Joel Sedillo --</span>
            <a href="https://github.com/Koda53/Web_Portfolio" target="_blank" rel="noopener noreferrer" className="underline">
                View Source on GitHub
            </a>
        </div>
    </section>
    );
}

export default Footer;