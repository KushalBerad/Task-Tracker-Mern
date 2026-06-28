function Navbar() {
    return (
        <nav className="bg-slate-950 border-b border-slate-700 p-5 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                <div>
                    <h1 className="text-4xl font-bold tracking-wide text-white">
                        Task Tracker
                    </h1>
                    <p className="text-slate-400 mt-1">
                        Manage work efficiently
                    </p>
                </div>

                <div className="text-sm text-slate-500 hidden md:block">
                    
                </div>

            </div>
        </nav>
    );
}

export default Navbar;