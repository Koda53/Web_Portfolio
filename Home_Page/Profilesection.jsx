
function Profilesection (){
    return(
        <div className="absolute top-[35%] flex flex-col items-center text-center w-full">
            <div className="w-75 h-75 rounded-full bg-gray-300 overflow-hidden border-4 border-black flex justify-center items center">
                <img src = "/public/bron.jpeg" alt="Joel Sedillo" className="w-[90%] h-[90%] object-cover items center" />"
            </div>
            <h1 className="text-2xl font-bold mt-4">Joel Sedillo</h1>
            <p className="text-lg text-zinc-500 mt-2">Computer Engineer | Computer Science Major <br></br> Music Production Minor</p>
        </div>
    );
}

export default Profilesection;