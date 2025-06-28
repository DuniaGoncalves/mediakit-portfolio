import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';
import pic2 from '../assets/pic2.jpeg';
import pic3 from '../assets/pic3.jpeg';
import pic6 from '../assets/pic6.jpeg';
import gallery1 from '../assets/gallery1.jpeg';
import gallery2 from '../assets/gallery2.jpeg';
import gallery3 from '../assets/gallery3.jpeg';
import gallery4 from '../assets/gallery4.jpeg';
import gallery5 from '../assets/gallery5.jpeg';
import gallery6 from '../assets/gallery6.jpeg';
import review1 from '../assets/review1.jpeg';
import review2 from '../assets/review2.jpeg';
import review3 from '../assets/review3.jpeg';
import review4 from '../assets/review4.jpeg';

const Gallery = () => {
    const mediaFiles = [
        { type: 'video', src: video1, alt: 'video nighttime routine' },
        { type: 'video', src: video2, alt: 'video breakfast sandwich review' },
        { type: 'video', src: video3, alt: 'video using hair oil' },
        { type: 'video', src: video4, alt: 'video clio bars review' },
        { type: 'video', src: video5, alt: 'video bursting boba review' },
        { type: 'image', src: pic3, alt: 'image miya floral arangement clkass' },
        { type: 'image', src: pic2, alt: 'image mommy floral arragement class' },
        { type: 'image', src: pic6, alt: 'image meta rayban glasses' },
        { type: 'image', src: gallery1, alt: 'Screenshot of images used for product reviews' },
        { type: 'image', src: review1, alt: 'Screenshot of review 1' },
        { type: 'image', src: gallery2, alt: 'Screenshot of images used for product reviews' },
        { type: 'image', src: review2, alt: 'Screenshot of review 2' },
        { type: 'image', src: gallery3, alt: 'Screenshot of images used for product reviews' },
        { type: 'image', src: review3, alt: 'Screenshot of review 3' },
        { type: 'image', src: gallery4, alt: 'Screenshot of images used for product reviews' },
        { type: 'image', src: gallery5, alt: 'Screenshot of images used for product reviews' },
        { type: 'image', src: review4, alt: 'Screenshot of review 4' },
        { type: 'image', src: gallery6, alt: 'Screenshot of images used for product reviews' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {mediaFiles.map((file, index) => (
                <div key={index} className="rounded overflow-hidden shadow-sm border bg-white">
                    {file.type === 'image' ? (
                        <img
                            src={file.src}
                            alt={file.alt}
                            className="w-full h-140 object-cover"
                        />
                    ) : (
                        <video controls className="w-full h-140 object-cover" src={file.src} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Gallery;
