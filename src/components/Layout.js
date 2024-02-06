import Welcome from "./sections/welcome-section/Welcome";
import {SkillsSection} from "./sections/skills-section/skills-section";
import {ExperienceSection} from "./sections/experience-section/ExperienceSection";
import {ContactSection} from "./sections/contact-section/ContactSection";


const Layout = () => {
    return(
            <>
                <Welcome />
                <SkillsSection/>
                <ExperienceSection/>
                <ContactSection/>
            </>
    )
}

export default Layout;