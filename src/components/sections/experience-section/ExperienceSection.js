import {Section} from "../../content/Section";
import {experience} from "../../../data/experience";
import ExpCard from "./ExpCard";
import Carousel from "../../content/Carousel";
import {useEffect, useState} from "react";
import {BREAKPOINTS} from "../../../constants/breakpoints";

export const ExperienceSection = ({windowSize}) => {
    const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow(windowSize.width));

    function calculateSlidesToShow(windowWidth) {
        if (windowWidth < BREAKPOINTS.md) {
            return 1;
        } else if (windowWidth >= BREAKPOINTS.md && windowWidth < BREAKPOINTS.xl) {
            return 2;
        } else if (windowWidth >= BREAKPOINTS.xl && windowWidth < BREAKPOINTS.xxl) {
            return 3;
        } else {
            return 4;
        }
    }

    useEffect(() => {
        setSlidesToShow(calculateSlidesToShow(windowSize.width));
    }, [windowSize]);
    return (
            <Section sectionStyles={'bg-blue-50'}>
                <div className='w-full'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4 text-center'>My Experience:</h1>
                </div>
                <div className='w-full'>
                    <Carousel cardsToShow={slidesToShow}>
                        {
                            experience.map((exp, index) => (
                                <ExpCard key={'experience_'+index} experience={exp}/>
                            ))
                        }
                    </Carousel>
                </div>
            </Section>
    )
}