import Header from './components/Header'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import './App.css'

const App = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Header />
            <main className="px-4 sm:px-10 md:px-20 py-12 space-y-24">
                <Hero />
                <section id="about" className="scroll-mt-20">
                    <About />
                </section>
                <section id="gallery" className="scroll-mt-20">
                    <Gallery />
                </section>
                <section id="contact" className="scroll-mt-20">
                    <Contact />
                </section>
            </main>
            <footer className="text-center text-sm py-6 text-gray-500">
                © {new Date().getFullYear()} Dunia Imara Goncalves. All rights reserved.
            </footer>
        </div>
    );
}

export default App
