const Header = () => {
    return (
        <header className="w-full px-6 py-4 bg-pink-100 border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold text-pink-800 tracking-wide">Dunia Imara Goncalves</h1>
                <nav>
                    <ul className="flex space-x-6 text-sm font-medium text-pink-700">
                        <li><a href="#gallery" className="hover:underline">Gallery</a></li>
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
