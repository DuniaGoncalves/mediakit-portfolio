import heroImg from '../assets/hero-family.jpg';

const Hero = () => {
    return (
        <section className="relative bg-pink-100 py-20 px-6 text-center">
            <div className="max-w-3xl mx-auto z-10 relative">
                <h1 className="text-4xl md:text-5xl font-bold text-pink-800 leading-tight mb-4">
                    Capturing the Magic in Everyday Moments ✨
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                    Real family life, joyful chaos, and heartfelt storytelling — one post at a time.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition"
                >
                    Work With Me
                </a>
            </div>
            <img
                src={heroImg}
                alt="Mom and kids enjoying quality time"
                className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
            />
        </section>
    );
};

export default Hero;