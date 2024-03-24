export default function ProjectCard(props) {
    const { project } = props;

    return (
            <div className='h-full w-full bg-white rounded-3xl'>
                <div className='p-4 h-full'>
                    <div className="h-3/6 flex items-center justify-center">
                        <img className="w-full h-full rounded-lg" src={project.image} alt={project.heading}/>
                    </div>

                    <div className='h-2/6 overflow-hidden'>
                        <h2 className='text-2xl font-bold mt-4'>{project.heading}</h2>
                        <div className='flex gap-1 mt-2'>
                            {
                                project.stack.map((skill, index) => (
                                    <div className='bg-indigo-600 rounded-lg py-0.5 px-2 text-xs text-white' key={'skill_'+index}>{skill}</div>
                                ))
                            }
                        </div>
                        <p className='text-base mt-4'>{project.description}</p>
                    </div>


                    <div className='h-1/6 flex justify-evenly items-center gap-8 text-orange-400'>
                        <a className='h-10 hover:bg-orange-100 py-2 px-4 rounded-xl'
                           href={project.codeURL}>
                            <i className='devicon-github-original text-orange-400 mr-2'></i>
                            Code
                        </a>
                        <a className='h-10 hover:bg-orange-100 py-2 px-4 rounded-xl'
                           href={project.demoURL}>
                            <i className='devicon-googlecloud-plain text-orange-400 mr-2'></i>
                            Demo
                        </a>
                    </div>
                </div>
            </div>
    );
}