import Welcome from "./sections/welcome-section/Welcome";
import {SkillsSection} from "./sections/skills-section/skills-section";
import {ExperienceSection} from "./sections/experience-section/ExperienceSection";
import {ContactSection} from "./sections/contact-section/ContactSection";
import {Works} from "./sections/works-section/Works";


const Layout = ({windowSize}) => {
    return(
            <>
                <Welcome />
                <SkillsSection/>
                <Works/>
                <ExperienceSection windowSize={windowSize}/>
                <ContactSection/>
            </>
    )
}

export default Layout;