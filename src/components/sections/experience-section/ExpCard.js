export default function ExpCard(props) {
    const { experience } = props;

    return (
        <div className={`relative w-full min-h-full overflow-hidden bg-indigo-700 rounded-3xl max-w-sm shadow-lg text-white mx-1 md:mx-4`}>
            <a href={experience.url}>
                    <span className="bg-indigo-500 rounded-full text-xs font-bold px-3 py-2 leading-none absolute top-4 right-4 z-10">
                        {experience.timePeriod}
                    </span>
                <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="red" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="red" />
                </svg>

                <div className="relative pt-8 px-12 flex items-center justify-center">
                    <img className="relative object-scale-down h-[100px]" src={experience.image} alt={experience.heading} />
                </div>

                <hr className="w-full border-indigo-500 my-3" />

                <div className="relative px-6 pb-6 mt-3">
                    <span className="block font-semibold text-lg mt-3">{experience.heading}</span>
                    <span className="block opacity-75">{experience.paragraph1}</span>
                </div>
                <ul className='px-6 list-inside'>
                    {
                        experience.points.map((point, index) => (
                            <li key={"list_item_" + index} className="flex space-x-1">
                                <svg className="flex-shrink-0 h-6 w-5 text-green-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
                                </svg>
                                <span className="text-gray-200">{point}</span>
                            </li>
                        ))
                    }
                </ul>
            </a>
        </div>
    );
}