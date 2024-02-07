import {useState} from "react";

const Carousel = ({ children: slides, cardsToShow }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const goToPrev = () => {
        setCurrentSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
    }
    const goToNext = () => {
        setCurrentSlide((current) => (current === slides.length - 1 ? 0 : current + 1))
    }

    const slideWidth = `${100 / cardsToShow}`;

    return (
            <div className="overflow-hidden relative rounded-3xl">
                <div className='flex transition-transform ease-out duration-500'
                     style={{transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
                         width: `${slides.length * slideWidth}%`,
                     }}>
                    {slides.map((slide, index) => (
                        <div key={index} className='flex items-start' style={{ width: `${slideWidth}%` }}>
                            {slide}
                        </div>
                    ))}
                </div>
                {slides.length > cardsToShow && (
                    <div className='absolute inset-0 flex items-center justify-between'>
                        <button className='p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white'
                                onClick={goToPrev}>
                            <img className="w-10" src="/assets/chevron-left.svg" />
                        </button>
                        <button className='p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white'
                                onClick={goToNext}>
                            <img className="w-10" src="/assets/chevron-right.svg" />
                        </button>
                    </div>
                )}
            </div>
    )
}

export default Carousel;