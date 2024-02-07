import {badges} from "../../../data/skills";
import {Badge} from "../../content/Badge";

export const Skills = () => {
    return (
        <div className='w-full flex flex-col items-center md:items-start'>
            <h2 className='text-3xl md:text-[2.5rem] font-bold mt-10'>Tech-Stack:</h2>
            <div className="bg-gray-200 w-full max-w-2xl mt-4 space-y-4">
                <div className="mx-auto p-4">
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1">
                        {badges.map((skill, index) => (
                            <Badge key={index} title={skill.title} color={skill.color} icon={skill.icon} index={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}