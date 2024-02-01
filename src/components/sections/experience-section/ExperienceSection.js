import {Section} from "../../content/Section";
import {experience} from "../../../data/experience";
import ExpCard from "./ExpCard";

export const ExperienceSection = () => {
    return (
            <Section sectionId={'experience'} sectionStyles={'bg-blue-50'}>
                <div className='w-full'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-10 text-center'>My Experience:</h1>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center h-3/4">
                    {
                        experience.map((exp, index) => (
                            <ExpCard key={'experience_'+index} experience={exp}/>
                        ))
                    }
                </div>
            </Section>
    )
}